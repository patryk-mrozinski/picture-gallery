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

  const switchLanguage = language => setValue(language)

  const switchLnaguageTitle = value === LANGUAGE.English ? "English" : "Polski"

  return (
    <LanguageContext.Provider
      value={{
        value,
        selectedLanguage,
        isSelectedLanguageEnglish,
        switchLnaguageTitle,
        switchLanguage,
        setValue,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
