// FaQuoteRight.tsx
import React from 'react';

interface FaQuoteRightProps {
  size?: number;
  color?: string;
}

const FaQuoteRight: React.FC<FaQuoteRightProps> = ({ size = 30, color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M19 8c0-3.314-2.686-6-6-6v4c.552 0 1 .448 1 1s-.448 1-1 1h-2v6h2c3.314 0 6-2.686 6-6zm-8 0c0-3.314-2.686-6-6-6v4c.552 0 1 .448 1 1s-.448 1-1 1H3v6h2c3.314 0 6-2.686 6-6z" />
  </svg>
);

export default FaQuoteRight;