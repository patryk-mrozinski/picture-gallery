import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const LanguageContextButton = () => {
  const { switchLnaguageTitle, toggleLanguage } = useContext(LanguageContext)

  return (
    <button
      onClick={toggleLanguage}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {switchLnaguageTitle}
    </button>
  )
}

export default LanguageContextButton
