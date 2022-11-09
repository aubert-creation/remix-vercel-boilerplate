import type { FC } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import type { SVGProps } from '@components/core/Icon/types';

const rotation = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const AnimatedSvg = styled.svg`
  animation: ${rotation} 1.5s infinite linear;
`;

const Loader: FC<SVGProps> = ({ color, size = 12, opacity = 1 }) => {
  const theme = useTheme();
  const LoaderColor = color ?? theme.colors.secondary;

  return (
    <AnimatedSvg width={size} height={size} opacity={opacity} viewBox="0 0 48 47" fill="none">
      <path
        d="M8.77243 8.27209C8.07033 7.57 6.92599 7.56582 6.28 8.31987C3.09708 12.0353 1.15207 16.6711 0.746369 21.577C0.291119 27.0821 1.80371 32.5702 5.015 37.0647C8.22629 41.5593 12.928 44.7688 18.2835 46.1222C23.6391 47.4756 29.3011 46.885 34.2621 44.4557C39.2231 42.0263 43.1614 37.9157 45.3761 32.8552C47.5908 27.7948 47.9384 22.1127 46.357 16.82C44.7756 11.5273 41.3678 6.96731 36.7399 3.95137C32.6157 1.26371 27.761 -0.0423825 22.8743 0.193809C21.8826 0.241744 21.1842 1.14828 21.3083 2.1334C21.4324 3.11853 22.3323 3.80787 23.3246 3.77386C27.3645 3.6354 31.3659 4.74107 34.7767 6.96381C38.6915 9.51499 41.5742 13.3723 42.9119 17.8494C44.2496 22.3265 43.9556 27.133 42.0821 31.4136C40.2086 35.6942 36.8773 39.1714 32.6808 41.2264C28.4842 43.2814 23.6947 43.7809 19.1645 42.6361C14.6342 41.4913 10.6571 38.7763 7.94064 34.9744C5.22421 31.1725 3.9447 26.5301 4.3298 21.8733C4.66532 17.8161 6.24547 13.9771 8.83197 10.8707C9.46731 10.1077 9.47452 8.97419 8.77243 8.27209Z"
        fill={LoaderColor}
      />
    </AnimatedSvg>
  );
};

export default Loader;
