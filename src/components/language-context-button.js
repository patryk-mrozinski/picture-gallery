import React, { useContext } from "react"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { LanguageContext } from "../context/LanguageContext"

import "/node_modules/flag-icons/css/flag-icons.min.css"

const LanguageContextButton = () => {
  const { switchLnaguageTitle, switchLanguage, isSelectedLanguageEnglish } =
    useContext(LanguageContext)

  return (
    <div>
      <Menu as="div" className="relative inline-block text-center">
        <div>
          <MenuButton className="menu-nav-button inline-flex w-full justify-center rounded-md px-6 py-2 hover:bg-gray-50">
            <span
              className={`fi fis fi-${isSelectedLanguageEnglish ? "us" : "pl"}`}
            />
            {switchLnaguageTitle}
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute px-6 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <button
                onClick={_event => switchLanguage("eng")}
                className="block py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                <span className={"fi fis fi-us"} />
                English
              </button>
            </MenuItem>
          </div>
          <div className="py-1">
            <MenuItem>
              <button
                onClick={_event => switchLanguage("pl")}
                className="block py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                <span className={"fi fis fi-pl"} />
                Polski
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default LanguageContextButton
