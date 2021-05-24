import React, { useState } from 'react';

import ProgressBar, { ProgressBarProps } from '~atoms/ProgressBar';

const useProgressBar = ({ totalCount, currentCount, defaultCount, ...props }: ProgressBarProps) => {
  const [current, setCurrent] = useState(currentCount ?? 0);

  const handleIncreaseGage = () => setCurrent(current + 1);
  const handleDecreaseGage = () => setCurrent(current - 1);

  const renderProgressBar = () => (
    <ProgressBar totalCount={totalCount} currentCount={current} defaultCount={defaultCount} {...props} />
  );
  return { renderProgressBar, handleIncreaseGage, handleDecreaseGage };
};

export default useProgressBar;
