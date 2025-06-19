import type { NavbarItem } from "@/types/NavbarItem";
import { useState } from "react";
import DrawerMobile from "./DrawerMobile";

interface Props {
  items: NavbarItem[];
  currentPath: string;
  buttonClasses: string;
}

const NavbarMobile: React.FC<Props> = ({
  items,
  currentPath,
  buttonClasses,
}) => {
  console.log(currentPath);

  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`p-2 focus:outline-none font-light text-2xl ${buttonClasses}`}
      >
        ☰
      </button>

      {open && (
        <button
          className="absolute inset-0 bg-black/50 h-screen z-200"
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
