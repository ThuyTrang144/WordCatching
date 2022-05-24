# Redux Practice

# OVERVIEW
- This document provides a detailed estimate plan of the Redux Practice

# TECHNICAL
- HTML5/CSS3
- TypeScript
- React-Redux
- Redux
- Redux Toolkit
- Jest & React Testing Lib
- Storybook

# TEAM SIZE
- 1 dev

# TARGET
- Understand how to use React-Redux for UI binding
- Understand how to use Redux Toolkit for writing Redux logic
- Understand how to use RTK query for fetching data
- Understand how to use middleware for async action

# REQUIREMENT
- Build a Guess the Picture game includes:
  - Page admin for editing, adding, deleting question
  - Page user for playing game

# MAIN FEATURE
- For admin: 
  - Edit question
  - Delete question
  - Add question
- For users:
  - Submit answer
  - View score and level

# TASK MANAGEMENT
- [Trello](https://trello.com/b/PU5UBJt3/guess-the-picture-game)
  
# MAIN COMPONENT
- Add/ Edit question Form
- Menu
- Question list
- Question detail
- Keyboard
- Image
- Result
- Welcome

# TIMELINE
- **6 days (May 25, 2022 to June 01, 2022)**
- Day 1:
  - Setup environment
  - Analyzing design
  - Initial Structure

- Day 2:
  - Create admin page
    - Add/ Edit question form
    - Delete popup
    - Menu
    - Question list
  - Write unit test 

- Day 3:
  - Create welcome screen
  - Create game screen
  - Create result screen
  - Create score and level screen
  - Write unit test 
  
- Day 4: 
  - Add question
  - Edit question
  - Delete question
  - Write unit test

- Day 5:
  - Add checking answer feature
  - Add Calculating features
  - Write unit test

- Day 6: 
  - Self-review and refactor code
  
# RUN
- Clone project: 
  - Using SSH: `git@gitlab.asoft-python.com:trang.nguyenthuy/react-training.git`
  - Using HTTPS: `https://gitlab.asoft-python.com/trang.nguyenthuy/react-training.git`
- Checkout branch: `git checkout feature/redux-practice`
- Change directory: `cd redux-practice`
- Install dependencies : `npm install`
- Run app: `npm start`
- Open on web: `http://localhost:3000/`
- Run story book: `npm run storybook`
- View story book on web: `http://localhost:6006/`
- Run test: `npm test`
