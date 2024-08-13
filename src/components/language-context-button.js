import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const LanguageContextButton = () => {
  const { value, setValue } = useContext(LanguageContext)
  const handleClick = () => {
    value === "eng" ? setValue("pl") : setValue("eng")
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {value === "eng" ? "Polski" : "English"}
    </button>
  )
}

export default LanguageContextButton
