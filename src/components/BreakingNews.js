import React from "react"

const BreakingNews = ({ news }) => {
  if (!news || news.length === 0) {
    return <p>No Breaking News</p>
  }

  return (
    <div
      style={{
        background: "red",
        color: "white",
        padding: "10px",
        fontWeight: "bold",
      }}
    >
      {news[0].title}
    </div>
  )
}

export default BreakingNews
