import type { NavbarItem } from "@/types/NavbarItem";
import ArrowIcon from "@/components/client/icons/ArrowIcon";

interface Props {
  item: NavbarItem;
  isActive: boolean;
  isItemOpen: boolean;
  selectItem: (item: NavbarItem | null) => void;
  setOpen: (open: boolean) => void;
  currentPath: string;
}

const NavItemChildren: React.FC<Props> = ({
  item,
  isActive,
  selectItem,
  isItemOpen,
  setOpen,
  currentPath,
}) => {
  const onSelectItem = () => {
    if (isItemOpen) return selectItem(null);
    selectItem(item);
  };

  const arrowClass = isItemOpen ? "rotate-180" : "rotate-270";
  const itemClasses =
    "relative w-full flex justify-between items-center px-4 py-3 text-lg text-left transition-all duration-300";

  const activeClasses = isActive
    ? "text-mika-primary font-bold"
    : "text-gray-800 font-medium";

  const lineClassActive = isActive
    ? `after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-mika-primary after:bottom-2 after:w-[88%]`
    : "";

  return (
    <>
      <button
        className={`${itemClasses} ${activeClasses} ${lineClassActive}`}
        onClick={onSelectItem}
      >
        <span className="font-title">{item.name.toLocaleUpperCase()}</span>
        <ArrowIcon
          className={`transform transition-transform duration-300 size-10 ${arrowClass}`}
        />
      </button>

      <ul
        className={`flex flex-col bg-gray-50 transition-all duration-300 overflow-hidden divide-y divide-gray-200 ${
          isItemOpen ? "max-h-96 py-1" : "max-h-0"
        }`}
      >
        {item.children!.map((child) => {
          const isActive = currentPath === child.href;

          const linkBase =
            "font-title flex items-center gap-2 px-3 py-2 text-base font-medium transition-all duration-200";
          const linkActive = "text-mika-primary bg-gray-100";
          const linkInactive = "text-gray-700 hover:bg-gray-200";

          const iconBase =
            "size-4 rotate-180 transition-transform duration-200";
          const iconActive = "translate-x-1 text-mika-primary";
          const iconInactive = "group-hover:translate-x-1";

          return (
            <li key={child.href}>
              <a
                href={child.href}
                onClick={() => setOpen(false)}
                className={`${linkBase} ${
                  isActive ? linkActive : linkInactive
                }`}
              >
                <ArrowIcon
                  className={`${iconBase} ${
                    isActive ? iconActive : iconInactive
                  }`}
                />
                {child.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItemChildren;
