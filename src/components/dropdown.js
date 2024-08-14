import React, { useContext } from "react"
import { Link } from "gatsby"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { LanguageContext } from "../context/LanguageContext"

const Dropdown = () => {
  const { isSelectedLanguageEnglish } = useContext(LanguageContext)
  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <MenuButton className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {isSelectedLanguageEnglish ? "More" : "Wiecej"}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              {isSelectedLanguageEnglish ? "About" : "O mnie"}
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
export default Dropdown
