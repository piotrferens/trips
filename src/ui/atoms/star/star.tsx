import { useTheme } from '@emotion/react';
import { StarProps } from './star.types';

export const Star = ({ strokeColor }: StarProps) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="18"
      height="18"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g transform="translate(128 128) scale(0.72 0.72)">
        <g
          fill="currentColor"
          stroke="none"
          strokeWidth="0"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit=" 10"
          fillRule="nonzero"
          opacity=" 1"
          transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
        >
          <path
            stroke={strokeColor ? theme.colors[strokeColor] : 'none'}
            strokeWidth="6px"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            fill="currentColor"
            fillRule="nonzero"
            opacity=" 1"
            d="M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z"
            transform=" matrix(1 0 0 1 0 0)"
          />
        </g>
      </g>
    </svg>
  );
};
