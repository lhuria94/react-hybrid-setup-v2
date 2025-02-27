# React 18 Hybrid SSR & CSR News App

This project demonstrates a hybrid approach to server-side rendering (SSR) and client-side rendering (CSR) using React 18 with Express and Webpack.

## Project Structure

```md
.
├── package-lock.json
├── package.json
├── server.js
├── src
│ ├── App.js
│ ├── components
│ │ ├── BreakingNews.js
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ └── NewsList.js
│ ├── context
│ │ └── NewsContext.md
│ ├── index.html
│ ├── index.js
│ └── styles.css
└── webpack.config.js
```

## Features

- Uses **React 18** with **SSR (Server-Side Rendering)** and **CSR (Client-Side Rendering)**
- Express.js for the backend
- Webpack for bundling assets
- Context API for state management

## Rendering Approaches

### Client-Side Rendering (CSR)

The **NewsList** component fetches and renders news dynamically on the client side using React hooks and Axios. This allows for real-time data retrieval and updates without requiring a page reload.

### Server-Side Rendering (SSR)

The **BreakingNews** component demonstrates an SSR approach, where breaking news headlines are pre-rendered on the server and delivered as part of the initial HTML payload. This enhances performance and SEO.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (>=14.x recommended)
- **npm** or **yarn**

## Installation

Clone the repository and install dependencies:

```sh
git clone <repo-url>
cd <project-folder>
npm install
```

## Building the Project

Run Webpack to generate the production build:

```sh
npx webpack --mode=production
```

This creates the `dist/` folder containing the bundled files.

## Running the Server

Start the Express server:

```sh
node server.js
```

The app will be accessible at `http://localhost:3000`.

## Development Mode

To run the project in development mode:

```sh
npm start
```

## Folder Breakdown

- **src/**: Contains React components, styles, and app logic.
- **server.js**: Express server handling SSR.
- **webpack.config.js**: Webpack configuration file.
- **dist/**: Generated build files after Webpack processing.

## License

This project is open-source under the MIT License.
