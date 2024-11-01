# Car Dealer App

## Overview

The Car Dealer App is a web application built with Next.js that allows users to filter vehicles by make and model year. Users can view detailed vehicle information based on their selections. This project utilizes Tailwind CSS for styling and integrates with the National Highway Traffic Safety Administration (NHTSA) API to fetch vehicle data.

## Features

- **Vehicle Filtering**: Users can filter vehicles by selecting a make and model year.
- **Responsive Design**: The application is designed to be fully responsive and user-friendly across different devices.
- **Dynamic Routing**: The app uses Next.js dynamic routing to navigate between the filter page and the results page.
- **Error Handling**: Comprehensive error handling for API requests to ensure a smooth user experience.
- **Loading States**: Visual feedback during data fetching to enhance user experience.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive layouts.
- **React**: A JavaScript library for building user interfaces.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Installation

To get started with the Car Dealer App, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Huseynitsu/car-dealer-app

2. Navigate into the project directory:
   cd your-repo-name

3. Install dependencies:
   npm install

4. Create a .env.local file in the root directory to store environment variables. Add the following:
   NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles

5. Run the application:
   npm run dev

Open your browser and go to http://localhost:3000.

## Usage
1. Open the application in your web browser.
2. Select a car brand from the dropdown menu.
3. Choose a model year from the second dropdown.
4. Click on the "Check results" button to view the available models for the selected make and year.
5. Navigate back using the "Go Back" button on the results page.