import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top navbar */}
      <header
        className={`navv fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-white md:bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between md:justify-around py-3 sm:px-3 lg:px-8">
          {/* Logo */}
          <div className="transition-all duration-300">
            <img
              src="images/logo-pink.png"
              alt="Mobile Logo"
              className="h-7 block md:hidden"
            />
            <img
              src={scrolled ? "images/logo-pink.png" : "images/logo-white.png"}
              alt="Desktop Logo"
              className="h-7 hidden md:block transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {["About", "Features", "Pages", "Pricing", "FAQs", "Sign in"].map((item) => (
              <li key={item}>
                <a href="#" className={scrolled ? "text-[#444]" : "text-white"}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="text-white text-sm font-semibold bg-[#f74780] duration-300 pb-2 pt-1 px-4 rounded-sm hover:text-black hover:bg-transparent hover:border-1"
              >
                Sign up
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <svg
                className={`w-6 h-6 transition-colors duration-300 cursor-pointer ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar overlay */}
      {menuOpen && (
        <>
          {/* Overlay with opacity */}
            <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/70 z-[997]"
            ></div>
          {/* Close button OUTSIDE sidebar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="fixed top-1 right-65 z-[999] text-4xl text-gray-500 cursor-pointer"
          >
            &times;
          </button>

          {/* Sidebar - fixed, white bg, not affected by scroll */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-[998] shadow-md cursor-pointer">
            <ul className="flex flex-col text-left text-[#444] font-medium text-sm">
              {["About", "Features", "Pages", "Pricing", "FAQs", "Sign in"].map((item) => (
                <li key={item} className="border-b border-gray-200 px-3 py-3 hover:bg-gray-200">
                  <a href="#">{item}</a>
                </li>
              ))}
              <li className="">
                <a
                  href="#"
                  className="block text-left text-white bg-[#f74780] py-3 px-3 mx-auto"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
