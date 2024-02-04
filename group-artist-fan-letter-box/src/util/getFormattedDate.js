const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString().substring(2, 4);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour =
    date.getHours() > 12
      ? (date.getHours() - 12).toString().padStart(2, "0")
      : date.getHours().toString().padStart(2, "0");
  const amPm = date.getHours() < 12 ? "오전" : "오후";
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  return `${year}. ${month}. ${day}. ${amPm} ${hour}:${minute}:${second}`;
};

export default getFormattedDate;
