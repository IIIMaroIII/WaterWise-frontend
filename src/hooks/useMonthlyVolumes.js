import { useEffect, useState } from "react";
import { selectUser } from "src/redux/users/selectors";
import { selectMonthlyWaterItems} from "src/redux/water/selectors";
import useChosenDate from "./useChosenDate";
import { calculateDailyPercentages, calculateDailyVolumes, groupByDays } from "src/utils/calculateDailyPercentages";
import { useSelector } from "react-redux";


export const useMonthlyVolumes = () => {
 
  const user = useSelector(selectUser);
  const monthlyItems = useSelector(selectMonthlyWaterItems);
  const [dailyPercentages, setDailyPercentages] = useState({});
  const { formatLocalISO } = useChosenDate();
  
  useEffect(() => {
    if (monthlyItems && monthlyItems.length > 0) {
      const formattedItems = monthlyItems.map(item => ({
        ...item,
        formattedDate: formatLocalISO(new Date(item.date)).split('T')[0],
      }));
      const groupedData = groupByDays(formattedItems);
      const volumes = calculateDailyVolumes(groupedData);
      const percentages = calculateDailyPercentages(volumes, user.dailyNorma);
      setDailyPercentages(percentages);
    }
  }, [monthlyItems, user.dailyNorma, formatLocalISO]);

  return { dailyPercentages };
}; 