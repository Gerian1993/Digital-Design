const date = "30.06.2022";

const getDayInfo = (date) => {
  let arr1 = date.split(".");
  let trueDate = `${arr1[1]}.${arr1[0]}.${arr1[2]}`;
  
  const info = new Date(trueDate);

  let dd = info.toLocaleDateString("ru", {
    weekday: "long",
  });

  let week = 0 | (info.getDate() / 7 + 1);
  let mm1 = info.toLocaleDateString("ru", {
    month: "numeric",
  });
  let months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let mm;
  for (let i in months) {
    if (mm1 === i) {
      mm = months[i];
    }
  }
  let yyyy = info.toLocaleDateString("ru", {
    year: "numeric",
  });

  let dayInfo = dd + "," + " " + week + " неделя " + mm + " " + yyyy;
  return dayInfo;
};
