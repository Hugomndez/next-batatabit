import { useEffect, useState } from 'react';

const useDate = () => {
  const [date, setDate] = useState('');

  const showDate = () => {
    const event = new Date();
    const options = { dateStyle: 'short' };
    // @ts-ignore
    const date = event.toLocaleString('en', options);
    setDate(date);
  };

  useEffect(() => {
    showDate();
  }, []);

  return date;
};

export default useDate;
