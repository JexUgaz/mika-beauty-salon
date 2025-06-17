import type { NavbarItem } from "@/types/NavbarItem";
import { useState } from "react";

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
          className="absolute inset-0 bg-black/50 bg-opacity-50 z-40 h-screen"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } h-screen`}
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
            const isActive = currentPath === item.href;

            return (
              <li key={item.href}>
                <a
                  href={isActive ? "#" : item.href}
                  onClick={() => setOpen(false)}
                  className={`relative block px-4 py-3 text-lg font-medium transition-all duration-300
                    ${isActive ? "text-mika-primary" : ""}
                    after:absolute after:left-4 after:bottom-2 after:h-[2px] after:bg-mika-primary after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-[calc(100%-2rem)]"
                        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
                    }
                  `}
                >
                  {item.name.toLocaleUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
