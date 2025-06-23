import type { NavbarItem } from "@/types/NavbarItem";
import { useState } from "react";
import DrawerMobile from "./DrawerMobile";

interface Props {
  items: NavbarItem[];
  className?: string;
  currentPath: string;
  useDarkMode: boolean;
}

const NavbarMobile: React.FC<Props> = ({
  items,
  currentPath,
  className = "",
  useDarkMode,
}) => {
  console.log(currentPath);

  const [open, setOpen] = useState(false);
  const buttonClass = useDarkMode ? "text-white" : "text-mika-primary";

  return (
    <div className={`lg:hidden me-2 ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`p-2 focus:outline-none font-light text-2xl ${buttonClass}`}
      >
        ☰
      </button>

      {open && (
        <button
          className="absolute inset-0 bg-black/50 h-[100dvh] z-200"
          onClick={() => setOpen(false)}
        />
      )}

      <DrawerMobile
        isOpen={open}
        setOpen={setOpen}
        items={items}
        currentPath={currentPath}
      />
    </div>
  );
};

export default NavbarMobile;
