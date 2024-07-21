import React from 'react';
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import css from './ChartComponent.module.css';

const CustomTooltip = ({ active = false, payload = [] }) => {
  if (active && payload && payload.length) {
    return (
      <div className={css.customTooltip}>
        <div className={css.label}>{`${payload[0].value * 1000} ml`}</div>
      </div>
    );
  }
  return null;
};

const data = [
  { name: '16', value: 1.8 },
  { name: '17', value: 1.5 },
  { name: '18', value: 2 },
  { name: '19', value: 1.75 },
  { name: '20', value: 2.2 },
  { name: '21', value: 2.3 },
  { name: '22', value: 2.1 },
];

const ChartComponent = () => {
  return (
    <div className={css.container}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
