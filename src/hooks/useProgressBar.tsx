import React, { useState } from 'react';

import ProgressBar, { ProgressBarProps } from '~atoms/ProgressBar';

const useProgressBar = ({ totalCount, currentCount, minCount, ...props }: ProgressBarProps) => {
  const [current, setCurrent] = useState(currentCount ?? 0);

  const handleIncreaseGage = () => setCurrent(current + 1);
  const handleDecreaseGage = () => setCurrent(current - 1);

  const renderProgressBar = () => <ProgressBar totalCount={totalCount} currentCount={current} minCount={minCount} {...props} />;
  return { renderProgressBar, handleIncreaseGage, handleDecreaseGage };
};

export default useProgressBar;
