export const daysInMonth = date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
