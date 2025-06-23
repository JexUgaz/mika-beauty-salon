import type { NavbarItem } from "@/types/NavbarItem";
import { useState } from "react";
import NavItem from "./NavItem";
import NavItemChildren from "./NavItemChildren";

interface Props {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  items: NavbarItem[];
  currentPath: string;
}

const DrawerMobile: React.FC<Props> = ({
  isOpen,
  setOpen,
  items,
  currentPath,
}) => {
  const [itemSelected, setItemSelected] = useState<NavbarItem | null>(null);

  return (
    <div
      className={`fixed top-0 right-0 h-[100dvh] w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-200`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setOpen(false)}
          className="text-mika-primary text-2xl focus:outline-none font-extrabold"
        >
          ✕
        </button>
      </div>

      <ul className="flex flex-col">
        {items.map((item) => {
          const isDirectMatch = item.href === currentPath;
          const isChildMatch = !!item.children?.some(
            (child) => child.href === currentPath
          );
          const isActive = isDirectMatch || isChildMatch;
          const hasChildren = item.children && item.children.length > 0;
          const isItemOpen = itemSelected?.name === item.name;

          return (
            <li key={item.name}>
              {hasChildren ? (
                <NavItemChildren
                  isActive={isActive}
                  item={item}
                  setOpen={setOpen}
                  isItemOpen={isItemOpen}
                  selectItem={setItemSelected}
                  currentPath={currentPath}
                />
              ) : (
                <NavItem isActive={isActive} item={item} setOpen={setOpen} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DrawerMobile;
