// FaTwitter.tsx
import React from 'react';

interface FaTwitterProps {
  size?: number;
  color?: string;
}

const FaTwitter: React.FC<FaTwitterProps> = ({ size = 30, color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775a4.935 4.935 0 0 0 2.163-2.724 9.867 9.867 0 0 1-3.127 1.197A4.925 4.925 0 0 0 16.616 3c-2.724 0-4.935 2.211-4.935 4.935 0 .387.043.765.126 1.127C7.691 9.094 4.066 7.27 1.64 4.41c-.427.735-.669 1.588-.669 2.495 0 1.723.875 3.243 2.203 4.135a4.906 4.906 0 0 1-2.23-.616v.061c0 2.402 1.706 4.4 3.96 4.844a4.935 4.935 0 0 1-2.224.084c.634 1.975 2.475 3.415 4.653 3.454A9.868 9.868 0 0 1 0 20.565a13.902 13.902 0 0 0 7.548 2.209c9.058 0 14.003-7.493 14.003-13.986 0-.213 0-.426-.014-.637A10.02 10.02 0 0 0 24 4.59a9.83 9.83 0 0 1-2.047.564A4.935 4.935 0 0 0 23.953 4.57z" />
  </svg>
);

export default FaTwitter;