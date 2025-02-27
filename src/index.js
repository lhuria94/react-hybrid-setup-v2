import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import App from "./App"
import { NewsProvider } from "./context/NewsContext"

const breakingNews = window.__INITIAL_DATA__

const container = document.getElementById("root")

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <NewsProvider breakingNews={breakingNews}>
      <App />
    </NewsProvider>
  )
} else {
  createRoot(container).render(
    <NewsProvider breakingNews={breakingNews}>
      <App />
    </NewsProvider>
  )
}
