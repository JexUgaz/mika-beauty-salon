interface Props {
  className?: string;
}

const ShareArrowIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    height="512"
    width="512"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="currentColor"
        d="M512,230.431L283.498,44.621v94.807C60.776,141.244-21.842,307.324,4.826,467.379
		c48.696-99.493,149.915-138.677,278.672-143.14v92.003L512,230.431z"
      />
    </g>
  </svg>
);

export default ShareArrowIcon;
