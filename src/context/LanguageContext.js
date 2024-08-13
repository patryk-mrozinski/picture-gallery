import React, { createContext, useState } from "react"

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [value, setValue] = useState("pl")

  return (
    <LanguageContext.Provider value={{ value, setValue }}>
      {children}
    </LanguageContext.Provider>
  )
}
