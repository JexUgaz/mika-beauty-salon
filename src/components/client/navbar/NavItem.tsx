import type { NavbarItem } from "@/types/NavbarItem";

interface Props {
  setOpen: (open: boolean) => void;
  item: NavbarItem;
  isActive: boolean;
}

const NavItem: React.FC<Props> = ({ setOpen, item, isActive }) => {
  const baseClasses =
    "font-title relative block px-4 py-3 text-lg transition-all duration-300";
  const afterClasses =
    "after:absolute after:left-4 after:bottom-2 after:h-[2px] after:bg-mika-primary after:transition-all after:duration-300";

  const textColor = isActive ? "text-mika-primary" : "";
  const activeClasses = isActive
    ? "after:w-[calc(100%-2rem)] font-bold"
    : "after:w-0 hover:after:w-[calc(100%-2rem)] font-medium";
  return (
    <a
      href={item.href}
      onClick={() => setOpen(false)}
      className={`${baseClasses} ${textColor} ${afterClasses} ${activeClasses}`}
    >
      {item.name.toLocaleUpperCase()}
    </a>
  );
};

export default NavItem;
