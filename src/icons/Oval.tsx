import { IconProps } from './types';

const Oval = ({ className }: IconProps) => (
  <svg
    width="3"
    height="3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3 3"
    className={className}
  >
    <circle cx="1.5" cy="1.5" r="1.5" />
  </svg>
);

export default Oval;
