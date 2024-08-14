import React, { createContext, useState } from "react"

export const LanguageContext = createContext()

const LANGUAGE = {
  Polish: "pl",
  English: "eng",
}

export const LanguageProvider = ({ children }) => {
  const [value, setValue] = useState(LANGUAGE.Polish)

  const selectedLanguage = value
  const isSelectedLanguageEnglish = selectedLanguage === LANGUAGE.English

  const toggleLanguage = () => {
    setValue(prev =>
      prev === LANGUAGE.English ? LANGUAGE.Polish : LANGUAGE.English
    )
  }

  const switchLnaguageTitle = value === LANGUAGE.English ? "Polski" : "English"

  return (
    <LanguageContext.Provider
      value={{
        value,
        selectedLanguage,
        isSelectedLanguageEnglish,
        switchLnaguageTitle,
        toggleLanguage,
        setValue,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
