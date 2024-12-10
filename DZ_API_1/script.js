const headerContainer = document.querySelector(".headerContainer");
const mainContent = document.querySelector(".content");

const dataSportActiv = JSON.parse(dataSpActiv);
console.log(dataSportActiv);
const dataBase = document.querySelector(".content");


let flag = false; // Флаг

dataSportActiv.forEach((data) => {
  const divCard = document.createElement("div");
  divCard.classList.add("containerCon");
  //Заголовок name
  const dataTitle = document.createElement("h1");
  dataTitle.classList.add("titleFlex");
  dataTitle.textContent = data.name;

  //Времени проведения time
  const dataTime = document.createElement("p");
  dataTime.textContent = `Времени проведения: ${data.time}`;

  //максимальное количество участников maxPs
  const dataMaxPs = document.createElement("p");
  dataMaxPs.textContent = `Максимальное количество участников: ${data.maxPs}`;

  //текущее количество участников regPs
  const dataRegPs = document.createElement("p");
  dataRegPs.textContent = `Tекущее количество участников: ${data.regPs}`;
  // Создаем кнопки
  const divButt = document.createElement("div");
  divButt.classList.add("buttonOneTwo");
  const buttonCard_one = document.createElement("button");
  buttonCard_one.classList.add("card__butt");
  buttonCard_one.textContent = "Запись";
  // buttonCard_one.id = "cartOne";
  const buttonCard_two = document.createElement("button");
  buttonCard_two.classList.add("card__butt");
  buttonCard_two.textContent = "Отмена записи";
  // buttonCard_two.id = "cartTwo";

  // Див для сообщения
  const resultMessage = document.createElement("div");
  //  modal.append(resultMessage);
  resultMessage.classList.add("hidden", "modal_result");

  // убираем сообщение пользователю
  function messageСlient() {
    setTimeout(() => {
      resultMessage.classList.toggle("hidden");
    }, 1000);
  }

  dataBase.appendChild(divCard);
  divCard.appendChild(dataTitle);
  divCard.appendChild(dataTime);
  divCard.appendChild(dataMaxPs);
  divCard.appendChild(dataRegPs);
  headerContainer.appendChild(resultMessage);
  //Кнопки
  divCard.appendChild(divButt);
  divButt.appendChild(buttonCard_one);
  divButt.appendChild(buttonCard_two);



    //Кнопка записи
    buttonCard_one.addEventListener("click", function (e) {
      if (data.maxPs === data.regPs) {
        buttonCard_one.disabled = true;
        resultMessage.textContent = "к сожалению, мест нет";
        messageСlient();
      } else {
        dataRegPs.textContent = `Tекущее количество участников: ${(data.regPs += 1)}`;
        flag = true;
        resultMessage.textContent = "Вы успешно записались на тренировку";
        messageСlient();
        buttonCard_one.disabled = true;
        buttonCard_two.disabled = false;
      }
    });
  
    //Кнопка отмены
    buttonCard_two.addEventListener("click", function (e) {
      if ((flag = true)) {
        resultMessage.textContent = "Запись отменена";
        messageСlient();
        dataRegPs.textContent = `Tекущее количество участников: ${(data.regPs -= 1)}`;
      }
      buttonCard_one.disabled = false;
      buttonCard_two.disabled = true;
    });
});
