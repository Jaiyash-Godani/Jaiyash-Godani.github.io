import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // npm install @heroicons/react
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Jaiyash
              </h1>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-200 hover:text-orange-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-orange-400/20 focus:outline-none">
                  {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu items */}
          <Disclosure.Panel className="md:hidden bg-black/80 px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block rounded-md px-3 py-2 text-gray-200 hover:bg-orange-400 hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
