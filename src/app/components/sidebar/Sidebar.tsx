import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/about", label: "About Us", icon: "ℹ️" },
    { to: "/work", label: "Our Work", icon: "💼" },
    { to: "/pricing", label: "Pricing", icon: "💲" },
    { to: "/articles", label: "Articles", icon: "📰" },
  ];

  const NavItem = ({ to, label, icon }: { to: string; label: string; icon: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-all duration-200 text-xs md:text-base px-2 py-2.5 rounded-lg w-10 md:w-full text-center flex items-center justify-center
        ${isActive 
          ? "text-black font-semibold bg-gray-100 shadow-sm" 
          : "text-gray-500 hover:text-black hover:bg-gray-50 hover:shadow-sm"
        }`
      }
      onClick={() => setIsMenuOpen(false)}
    >
      <span className="hidden md:inline">{label}</span>
      <span className="md:hidden text-lg" title={label}>{icon}</span>
    </NavLink>
  );

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-white z-30 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-8 h-8">
            <img className="w-full h-auto" src="src/assets/file.svg" alt="logo" />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xl font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-8 text-gray-600">@kumar</div>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[9.2%] flex-col items-center justify-center bg-white z-20 shadow-none transition-all duration-300 ease-in-out">
        <div className="flex flex-col w-[65%] h-[96%] items-center justify-between py-6">
          <div className="flex flex-col items-center w-full">
            {/* Logo */}
            <div className="mb-8 w-full flex justify-center transform hover:scale-105 transition-transform duration-200">
              <span className="text-2xl font-bold">
                <img className="w-full h-auto" src="src/assets/file.svg" alt="logo" />
              </span>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-3 w-full items-center">
              {navLinks.map((link) => (
                <NavItem key={link.to} {...link} />
              ))}
            </nav>
          </div>

          <div className="text-center">
            <h5 className="text-sm text-gray-600 font-medium">@kumar</h5>
          </div>
        </div>
      </aside>
    </>
  );
}
