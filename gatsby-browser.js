import React from "react"
import { LanguageProvider } from "./src/context/LanguageContext"

import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
)
