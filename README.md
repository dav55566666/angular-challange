# Angular-Challenge

This is a small Angular-based test project built as part of a coding challenge.  
It's a task manager with authentication, built using NGXS for state management and a clean modular structure for easy maintenance and extension.

## Features

- User registration and login using a password
- Authentication state persists after page refresh
- Session expires when the browser tab or window is closed
- Authenticated users can view, add, complete, and delete todos
- Todos are filtered by status: active or completed
- Search functionality for todos by name
- Sorting by name and creation date
- Pagination for large lists
- Fully responsive layout for desktop and mobile

## Technologies Used

- Angular 17
- NGXS for state management
- Ng-Zorro component library
- SCSS and Flexbox for styling
- LocalStorage for persisting auth and todo state
- TypeScript

## Getting Started

To run the project locally:

```bash
git clone https://github.com/your-username/angular-challenge.git
cd angular-challenge
npm install
ng serve
