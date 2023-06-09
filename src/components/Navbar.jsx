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
                    className="font-extrabold text-4xl text-purple-200"
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
        className="w-full flex items-center gap-9 p-5 shadow-md bg-purple-950 md:bg-transparent md:shadow-none md:relative"
      >
        <div className="text-white text-2xl">
          <button onClick={handleMenu} className="md:hidden">
            <IoIosMenu />
          </button>
        </div>
        <div className="md:flex md:items-center md:absolute md:w-full md:justify-between md:left-0 md:right-0 md:top-0 md:px-7 md:h-full md:bg-black md:py-9">


        <Link to="/">
          <img src={logo} alt="logo" className="w-52  " />
        </Link>
        <ul className="items- justify-end hidden md:flex md:gap-8 text-xl">
          {menuItems.map((item,i)=>(
            
          <li key={i}><Link to={item.path} className="text-white">
            {item.title}
          </Link></li>
          ))
          }
        </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
