# Travel Planner Frontend

This directory contains the frontend components for the Travel Planner project. These components provide the user interface for creating travel plans, viewing plans, and interacting with the application's features.

## Summary

The frontend consists of various components and pages designed to facilitate travel planning and management:

1. **Header**: Contains the header component for navigation and user authentication.
    - **Header.js**: Implementation of the header component.

2. **Map**: Provides interactive maps for selecting travel destinations and planning routes.
    - **Map.js**: Implementation of the map component.

3. **Pages**:
    - **CreatePlan**: Page for creating a new travel plan.
        - **CreatePlan.js**: Implementation of the create plan page.
    - **Home**: Home page displaying the main features and options.
        - **Home.js**: Implementation of the home page.
    - **Login**: Page for user authentication and login.
        - **Login.js**: Implementation of the login page.
    - **PlanDetail**: Page for viewing detailed information about a specific travel plan.
        - **PlanDetail.js**: Implementation of the plan detail page.
    - **Plans**: Page for viewing a list of travel plans.
        - **Plans.js**: Implementation of the plans page.
    - **Register**: Page for user registration and account creation.
        - **Register.js**: Implementation of the register page.

4. **Redux**: Contains the state management logic using Redux for managing user data and travel plans.
    - **Actions**:
        - **planActions.js**: Actions for managing travel plan data.
        - **userActions.js**: Actions for managing user authentication and registration.
    - **Reducers**:
        - **planReducer.js**: Reducer for handling travel plan-related state changes.
        - **userReducer.js**: Reducer for managing user authentication state.
    - **store.js**: Configuration for the Redux store.

5. **App.js**: Main application component integrating all other components and pages.
6. **App.css**: Styling file for the application.
7. **index.js**: Entry point for rendering the application.
8. **index.css**: Global styling for the application.
9. **App.test.js**: Test file for testing application components.

## Setup and Usage

1. Install dependencies using `npm install` or `yarn install`.
2. Start the development server using `npm start` or `yarn start`.
3. Access the application in your web browser at the specified URL.

Ensure that the backend server is running and accessible to the frontend application for full functionality.

## License

The frontend components are provided under the MIT License. See individual files for details.
