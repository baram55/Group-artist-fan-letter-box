const getFormattedDate = () => {
  const date = new Date();
  const year = date.toLocaleDateString("en-US", { year: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "2-digit" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const amPm = date.getHours() < 12 ? "오전" : "오후";
  const hour = date
    .toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
    })
    .substring(0, 2);
  const minute = date.toLocaleTimeString("en-US", { minute: "2-digit" });
  const second = date.toLocaleTimeString("en-US", { second: "2-digit" });

  return `${year}. ${month}. ${day}. ${amPm} ${hour}:${minute}:${second}`;
};
export default getFormattedDate;
