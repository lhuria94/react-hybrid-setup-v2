import React, { createContext, useContext } from "react"

const NewsContext = createContext()

export const NewsProvider = ({ children, breakingNews }) => {
  return (
    <NewsContext.Provider value={breakingNews}>{children}</NewsContext.Provider>
  )
}

export const useNews = () => {
  return useContext(NewsContext)
}
