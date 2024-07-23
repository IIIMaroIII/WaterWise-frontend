import { parseISO, format } from 'date-fns';

export const groupByDays = (data) => {
  return data.reduce((acc, record) => {
    const date = parseISO(record.date);
    const formattedDate = format(date, 'yyyy-MM-dd'); 

    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }
    acc[formattedDate].push(record.volume);

    return acc;
  }, {});
};

export const calculateDailyVolumes = (groupedData) => {
  return Object.keys(groupedData).reduce((acc, day) => {
    const totalVolume = groupedData[day].reduce((sum, volume) => sum + volume, 0);
    acc[day] = totalVolume;
    return acc;
  }, {});
};


export const calculateDailyPercentages = (dailyVolumes, dailyNorma) => {
  return Object.keys(dailyVolumes).reduce((acc, day) => {
    const percentage = Math.round((dailyVolumes[day] / (dailyNorma * 1000)) * 100);
    acc[day] = Math.min(percentage, 100); // Обмежити до 100%
    return acc;
  }, {});
};