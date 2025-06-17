interface IconProps {
  className?: string;
}

const ArrowIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M15 7L10 12L15 17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
