import React, { useState } from 'react';

import ProgressBar, { ProgressBarProps } from '~atoms/ProgressBar';

const useProgressBar = ({ totalCount, minCount, ...props }: ProgressBarProps) => {
  const [current, setCurrent] = useState(0);

  const resetGage = () => setCurrent(0);
  const handleIncreaseGage = () => setCurrent(current + 1);

  const handleDecreaseGage = () => setCurrent(current - 1);

  const renderProgressBar = () => <ProgressBar totalCount={totalCount} minCount={minCount} {...props} />;

  return { renderProgressBar, handleIncreaseGage, handleDecreaseGage, resetGage };
};

export default useProgressBar;
