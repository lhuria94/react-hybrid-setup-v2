import React from "react"
import Header from "./components/Header"
import BreakingNews from "./components/BreakingNews"
import NewsList from "./components/NewsList"
import Footer from "./components/Footer"
import { useNews } from "./context/NewsContext" // Import useNews hook

const App = () => {
  const breakingNews = useNews() // Get breaking news from context
  console.log("Context Data", breakingNews)
  return (
    <div>
      <Header />
      {breakingNews.length > 0 ? (
        <BreakingNews news={breakingNews} />
      ) : (
        <p>No Breaking News</p>
      )}
      <NewsList />
      <Footer />
    </div>
  )
}

export default App
