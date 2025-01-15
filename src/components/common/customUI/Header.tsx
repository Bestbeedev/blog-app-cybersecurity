import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { menuItems } from "@/routes/routes";
import { FaBars, FaTimes } from "react-icons/fa"; // Assurez-vous d'avoir installé react-icons
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-neutral-700 w-full z-40 relative flex px-4 md:px-20 justify-between items-center py-3">
      <div className="font-bold text-white text-xl">BlogSite</div>
      <div className="flex items-center">
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-white ${
              menuOpen ? "" : "p-2 rounded-lg bg-neutral-600 border-neutral-500"
            }  z-50 relative`}
          >
            {menuOpen ? (
              <div className="fixed p-2 rounded-lg bg-neutral-600 border-neutral-500 right-5 top-5">
                <FaTimes size={24} />
              </div>
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
        <div
          className={`fixed inset-y-0 left-0 w-full bg-neutral-800 bg-opacity-95 z-40 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 md:flex md:bg-transparent md:bg-opacity-0 md:z-auto md:flex-row md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:flex items-center w-full md:w-auto">
            {menuItems.map((item,index) => (
              <div
                key={index}
                className="mx-3 text-white"
              >
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      {item.subMenu ? (
                        <NavigationMenuTrigger className="bg-neutral-700 text-white">
                          <Link
                            key={item.title}
                            to={item.link || "#"}
                            onClick={handleLinkClick}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuTrigger>
                      ) : (
                        <Link
                          key={item.title}
                          className="mx-2 items-center text-sm flex"
                          to={item.link || "#"}
                          onClick={handleLinkClick}
                        >
                          {item.title}
                        </Link>
                      )}
                      <NavigationMenuContent className="w-full bg-neutral-700 text-white border-none rounded-lg p-4">
                        <NavigationMenuLink >
                          {item.subMenu?.map((subItem, index) => (
                            <Link
                              key={`${item.title}-${subItem.link}-${index}`}
                              to={subItem.link}
                              className="text-white flex flex-col"
                              onClick={handleLinkClick}
                            >
                              {subItem.subTitle}
                            </Link>
                          ))}
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ))}
            <div className="mt-4 md:mt-0">
              <Select>
                <SelectTrigger className="w-[120px] bg-neutral-500 text-white border-none rounded-lg">
                  <SelectValue
                    className="text-white rounded-lg"
                    placeholder="Select a language"
                  />
                </SelectTrigger>
                <SelectContent className="bg-neutral-600 border-none rounded-lg">
                  <SelectGroup className="text-white">
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="english">Anglais</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
