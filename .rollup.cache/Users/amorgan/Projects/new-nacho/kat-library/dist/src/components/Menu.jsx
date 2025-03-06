import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
const MenuComponent = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleMenu = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle submenu while ensuring only one is open at a time
    };
    return (<nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Menu */}
        <Menu as="div" className="relative inline-block text-left lg:hidden">
          {({ open }) => (<>
              <Menu.Button className="p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <Bars3Icon className="w-6 h-6"/>
              </Menu.Button>
              {open && (<div className="absolute left-0 mt-2 w-48 origin-top-left bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 rounded-md focus:outline-none">
                  {items.map((item, idx) => (<div key={idx} className="py-1">
                      <button onClick={() => toggleMenu(idx)} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex justify-between items-center">
                        {item.label}
                        {item.children && (<ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}/>)}
                      </button>
                      {item.children && openIndex === idx && (<div className="pl-4">
                          {item.children.map((subItem, subIdx) => (<a key={subIdx} href={subItem.href || "#"} className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                              {subItem.label}
                            </a>))}
                        </div>)}
                    </div>))}
                </div>)}
            </>)}
        </Menu>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {items.map((item, idx) => (<li key={idx} className="relative group">
              <a href={item.href || "#"} className="text-gray-700 dark:text-white px-3 py-2 font-medium hover:text-primary-500">
                {item.label}
                {item.children && <ChevronDownIcon className="w-4 h-4 inline ml-2 text-gray-500"/>}
              </a>
              {item.children && (<div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                  {item.children.map((subItem, subIdx) => (<a key={subIdx} href={subItem.href || "#"} className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                      {subItem.label}
                    </a>))}
                </div>)}
            </li>))}
        </ul>
      </div>
    </nav>);
};
export default MenuComponent;
//# sourceMappingURL=Menu.jsx.map