// export const daysInMonth = date =>
//   new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();


 export const daysInMonth = (month, year) => {
  const date = new Date(year, month - 1, 1);
  const days = [];
  while (date.getMonth() === month - 1) {
    days.push(new Date(date));
    date.setDate(date.getDate()+1);
  }
  return days;
};