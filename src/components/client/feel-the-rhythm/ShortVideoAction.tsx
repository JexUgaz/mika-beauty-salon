interface Props {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

const ShortVideoAction: React.FC<Props> = ({
  icon: Icon,
  label,
  iconClassName,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 cursor-pointer ${className}`}
  >
    <div className="bg-black/50 rounded-full p-3">
      <Icon className={`size-6 ${iconClassName ?? "text-white"}`} />
    </div>
    <p>{label}</p>
  </button>
);

export default ShortVideoAction;
