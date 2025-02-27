const express = require("express")
const fs = require("fs")
const path = require("path")
const React = require("react")
const { renderToPipeableStream } = require("react-dom/server")
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  extensions: [".js", ".jsx"],
})

const App = require("./src/App").default
const { NewsProvider } = require("./src/context/NewsContext")

const app = express()
app.use(express.static("dist"))

const fetchBreakingNews = async () => {
  return [{ title: "Breaking: Major Event Happening Now!" }]
}

app.get("/", async (req, res) => {
  try {
    const breakingNews = await fetchBreakingNews()

    fs.readFile(path.resolve("src/index.html"), "utf8", (err, template) => {
      if (err) {
        console.error("Error loading template:", err)
        res.status(500).send("Error loading template")
        return
      }

      const [start, end] = template.split("<!-- APP -->")

      res.setHeader("Content-Type", "text/html")
      res.write(start)

      // Inject breaking news for client-side hydration
      res.write(
        `<script>window.__INITIAL_DATA__ = ${JSON.stringify(
          breakingNews
        )};</script>`
      )

      const stream = renderToPipeableStream(
        React.createElement(
          NewsProvider,
          { breakingNews },
          React.createElement(App)
        ),
        {
          onAllReady() {
            console.log("Streaming App with Breaking News:", breakingNews)
            stream.pipe(res, { end: false })
            res.write(end)
            res.end()
          },
          onError(error) {
            console.error("Render Error:", error)
            res.status(500).send("Internal Server Error")
          },
        }
      )
    })
  } catch (error) {
    console.error("Error fetching breaking news:", error)
    res.status(500).send("Error fetching news")
  }
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
