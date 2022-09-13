# LAP 3 Portfolio Week Project - Universally Challenged 

## A quiz game built with react

- This is the client repo of the **_Universally Challenged_** quiz game
- The server of this project can be found [here](https://github.com/Lap-3-project/server)
- Demo: [https://universally-challenged.netlify.app/](https://universally-challenged.netlify.app/)

## Installation & Usage

### Installation

- Download repo at the top of this GitHub page
- **_git clone_** to clone the repo
- Open terminal and navigate to current directory in GitBash
- Run `npm install` to install dependencies
- Enter **_git init_** in the terminal to get the most update version of the repo in the future

### Usage

- `npm install` or `npm install --save-dev` to install dependencies in package.json
- `npm run dev` to open app
- `npm run test` to run tests
- `npm run coverage` to show coverage

### App.jsx

[Link to App.jsx](./src/App.jsx)

- Add routes to components
- Wrap routes with `DataProvider`

### main.jsx

[Link to main.jsx](./src/main.jsx)

- Render React app
- Wrap React app in `BrowserRouter`

### index.html

[Link to index.html](./index.html)

- Use React to render pages
- Use CSS to style pages

## Bugs

- Socket does not fully work on app
- Scores do not fully display correctly on app

## Wins & Challenges

### Wins

- Pages to show via React
- Connected pages using Routes & Route
- Some passing tests

### Challenges

- Making Socket work fully
- Displaying scores correctly
- Passing all tests
