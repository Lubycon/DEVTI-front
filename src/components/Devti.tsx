import React from 'react';

interface Props {
  size: 'small' | 'large';
}

const Devti = ({ size }: Props) => (
  <svg
    width={size === 'large' ? '138' : '67'}
    height={size === 'large' ? '37' : '17'}
    viewBox="0 0 138 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8591 0H0V37H14.8591C25.1012 37 32.9023 28.9657 32.9023 18.5C32.9023 8.03429 25.1012 0 14.8591 0ZM14.8591 28.86H8.49091V8.14H14.8591C20.6966 8.14 24.7298 12.1571 24.7298 18.5C24.7298 24.8429 20.6966 28.86 14.8591 28.86Z"
      fill="#A661EB"
    />
    <path d="M46.1672 28.86V22.3057H59.4343V14.2714H46.1672V8.14H60.761V0H37.6763V37H61.0263V28.86H46.1672Z" fill="#A661EB" />
    <path d="M74.7324 37H85.5583L97.6578 0H88.3709L80.1454 27.2214L71.9198 0H62.6329L74.7324 37Z" fill="#A661EB" />
    <path d="M125.792 0H98.1968V8.14H107.749V37H116.24V8.14H125.792V0Z" fill="#A661EB" />
    <path d="M129.509 0V37H138V0H129.509Z" fill="#A661EB" />
  </svg>
);

export default Devti;
