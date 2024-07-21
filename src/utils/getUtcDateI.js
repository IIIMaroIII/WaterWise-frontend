import { formatISO } from 'date-fns';

// export const getUtcDateInISO = () => {
//   const now = new Date();
//   const utcDate = addMinutes(now, now.getTimezoneOffset());
//   console.log('UTC Date:', utcDate); // Log to verify the correct UTC date
//   return formatISO(utcDate, { representation: 'complete' });
// };
// import { formatISO } from 'date-fns';

export const getUtcDate = () => {
  const now = new Date();
  const utcDate = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds(),
    ),
  );

  return utcDate.toISOString();
};
