export const parseDate = (isoDateString) => {
   const selectDate = new Date(isoDateString); 
    const day = selectDate.getDate();
    const month = selectDate.getMonth() + 1;
    const year = selectDate.getFullYear();

    const formattedDate = {
        month,
        year,
        day
    };
console.log(formattedDate);
    return formattedDate;
};
