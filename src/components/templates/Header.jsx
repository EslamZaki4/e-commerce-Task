import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const wishlist = useSelector((state) => state.wishlist);
  const navLinks = [
    { to: "/", title: "Products" },
    { to: "/wishlist", title: "Wishlist" },
  ];

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <DesktopMenu navLinks={navLinks} />
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} navLinks={navLinks} />
    </nav>
  );
};

 export const Logo = ({ dark = false }) => (
  <div className={`${dark ? "text-primary" : "text-white"} text-2xl font-bold`}>
    <Link to="/">MyStore</Link>
  </div>
);

const DesktopMenu = ({ navLinks }) => (
  <div className="hidden md:flex space-x-6">
    {navLinks.map((link) => (
      <NavItem key={link.to} to={link.to}>{link.title}</NavItem>
    ))}
  </div>
);

const MobileMenuButton = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="md:hidden text-white focus:outline-none"
    aria-label="Toggle menu"
  >
    {isOpen ? "✕" : "☰"}
  </button>
);

const MobileMenu = ({ isOpen, closeMenu, navLinks }) => (
  isOpen && (
    <div className="md:hidden mt-2 bg-primary rounded-md shadow-md">
      {navLinks.map((link) => (
        <NavItem key={link.to} to={link.to} onClick={closeMenu}>{link.title}</NavItem>
      ))}
    </div>
  )
);

const NavItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block text-white py-2 px-4 hover:bg-gray-700 rounded"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
