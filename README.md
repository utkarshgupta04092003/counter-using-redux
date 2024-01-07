# React Counter App with Redux Toolkit


## Table of Contents

1. [Overview](#overview)
2. [Screenshot](#screenshot)
3. [Features](#features)
4. [How to Use](#how-to-use)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [Contributions](#contributions)
8. [License](#license)

## Overview

The React Counter App with Redux Toolkit is a simple web application built with React, Vite, Tailwind CSS, and Redux Toolkit. The app features a counter with three buttons - Increase, Decrease, and Reset. It serves as a practice project for implementing state management using Redux Toolkit.

## Screenshot


## Features

- **Counter Buttons:** Three buttons for increasing, decreasing, and resetting the counter.

- **Redux Toolkit:** Utilizes Redux Toolkit for efficient and simplified state management.

## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/utkarshgupta04092003/counter-using-redux.git
   ```

2. Navigate to the project directory.

   ```bash
   cd counter-using-redux
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore the React Counter App with Redux Toolkit.

## Project Structure

- **src/components/showCount.jsx:** Display the current value of counter.

- **src/components/Increase.jsx:** Increase button which increase the counter value by one.

- **src/components/Decrease.jsx:** Decrease button which decrease the counter value by one.

- **src/components/Reset.jsx:** Reset button which set the counter value by zero.

- **src/features/countSlice.js:** Redux Toolkit slice defining actions and reducers for the counter.

- **src/app/countStore.js:** Redux store configuration.

- **src/App.js:** Main application component defining the counter component.

- **src/styles/tailwind.css:** Tailwind CSS styles.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Redux Toolkit

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use and modify the code for personal and commercial purposes.

