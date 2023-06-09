import { IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
const Navbar = () => {
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    {
      id: 2,
      title: "Case Studies",
      path: "/case-study",
    },
    {
      id: 3,
      title: "About",
      path: "/about",
    },
    {
      id: 4,
      title: "Services",
      path: "/services",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      {openMenu && (
        <div
          className="fixed z-50 top-0 bottom-0 left-0 right-0
        text-white p-5 bg-black
        "
          
        >
          <div className="flex items-center gap-10">
            <button onClick={handleMenu} className="text-2xl">
              <TfiClose />
            </button>
            <Link to="/"
            onClick={handleMenu}>
              <img src={logo} alt="logo" className="w-52" />
            </Link>
          </div>
          <div className="pt-20 flex flex-col gap-6">
            <ul className="space-y-5">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                  onClick={handleMenu}
                    to={item.path}
                    className="font-bold text-4xl text-purple-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact-us" onClick={handleMenu}>
              <button className="text-xl bg-purple-700 text-white px-20 py-4 w-full">
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}

      <div
        className="w-full flex items-center gap-9 p-5 shadow-md"
        style={{
          backgroundColor: "#390050",
        }}
      >
        <div className="text-white text-2xl">
          <button onClick={handleMenu}>
            <IoIosMenu />
          </button>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-52" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
