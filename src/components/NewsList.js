import React, { useState, useEffect } from "react"
import axios from "axios"

const NewsList = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=276ea5b4a2634ff5be80c74fc059c916"
      )
      .then((response) => {
        console.log("API Response:", response.data) // Debugging step
        setNews(response.data.articles || []) // Ensure articles exist
      })
      .catch((error) => {
        console.error("Error fetching news:", error)
      })
  }, [])

  return (
    <div>
      <header>News Headlines</header>
      <main className="news-container">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="news-item">
              {article.urlToImage && (
                <img src={article.urlToImage} alt="news" />
              )}
              <div className="news-title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </main>
      <footer>© 2025 NewsApp | All rights reserved.</footer>
    </div>
  )
}

export default NewsList
