interface Props {
  className: string;
}

const TouchIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    id="icon"
  >
    <path d="M13,2A6.0067,6.0067,0,0,0,7,8H9a4,4,0,0,1,8,0h2A6.0067,6.0067,0,0,0,13,2Z"></path>
    <path d="M21,30H16.5606a4,4,0,0,1-2.7088-1.0566L4.6513,20.4771A2.0018,2.0018,0,0,1,4.77,17.4219a2.0743,2.0743,0,0,1,2.6578.1728L11,20.8569V8a2,2,0,0,1,4,0v7a2,2,0,0,1,4,0v1a2,2,0,0,1,4,0v1a2,2,0,0,1,4,0v7A6,6,0,0,1,21,30Z"></path>
    <rect
      id="_Transparent_Rectangle_"
      data-name="<Transparent Rectangle>"
      fill="none"
      width="32"
      height="32"
    ></rect>
  </svg>
);

export default TouchIcon;
