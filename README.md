
# Profile Explorer

## Overview
Profile Explorer is a React-based web application designed to showcase user profiles with an interactive map integration. It allows users to explore profiles, view detailed information, and manage user data through an admin panel. The app leverages real-time geolocation features using MapLibre-GL, providing a seamless experience for both regular users and administrators.

## Features

### Home Page (`/`)
- **Profile List**: Displays a scrollable list of user profiles on the left side in a column format.
- **Interactive Map**: Features a dynamic map on the right side powered by MapLibre-GL, showing user locations.
- **Admin Link**: A clickable "Admin" link is positioned to the left of the "Profile Explorer" heading, redirecting to the admin panel (`/admin`).
- **Profile Interaction**: 
  - Clicking "Summary" on a profile card pans the map to the selected user's geolocation.
  - Clicking a profile card navigates to a detailed profile page.
- **Search Functionality**: Includes a search filter to find profiles by name or other criteria.
- **Responsive Design**: 
  - On mobile devices (screen width ≤ 768px), a toast notification advises users to "Scroll down to see the map!"
  - On desktop, a "Welcome to Profile Explorer!" toast greets users.

### Profile Details Page (`/profile/:id`)
- **Detailed View**: Shows comprehensive user information, including name, photo, description, address, and additional details (email, phone, interests, bio).
- **Map Integration**: Displays an interactive map highlighting the user's specific location based on latitude and longitude.

### Admin Panel (`/admin`)
- **User Management**:
  - **Add New Users**: Form to input user details (name, photo URL, description, address, latitude, longitude, email, phone, interests, bio).
  - **Edit Existing Users**: Pre-fill the form with existing data for updates.
  - **Delete Users**: Remove profiles with a single click.
- **Validation**: Ensures required fields (name, address, latitude, longitude) are filled, with error messages for invalid inputs.
- **Welcome Message**: Displays a "Welcome to the Admin Panel!" toast on load, styled with a blue theme for admins.
- **Cancel Edit**: Option to reset the form and exit edit mode.

### Additional Features
- **Loading State**: A spinner appears during simulated API calls (e.g., on page load).
- **Toast Notifications**: Uses `react-toastify` for user-friendly alerts and welcome messages.
- **State Synchronization**: Profiles are synced with the `ProfileContext` for real-time updates across components.

## Technology Used
- **React.js**: Core framework for building the UI.
- **MapLibre-GL**: Open-source library for interactive maps and geolocation visualization.
- **React Router**: Handles navigation between Home, Profile Details, and Admin Panel pages.
- **React Hooks**: Manages state (`useState`, `useEffect`) and context (`useContext`) for efficient data flow.
- **React Toastify**: Provides toast notifications for user feedback.
- **CSS**: Custom styles for layout (e.g., Flexbox for header alignment) and responsiveness.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Vishnu917vj/EXplorer_.git
   cd profile-explorer
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage
- **Home Page**: Visit `http://localhost:3000/` to explore profiles and use the search filter.
- **Profile Details**: Click a profile card to view details at `http://localhost:3000/profile/:id`.
- **Admin Panel**: Navigate to `http://localhost:3000/admin` via the "Admin" link to manage users.

## Project Structure
```
src/
├── components/         # Reusable components (ProfileCard, MapComponent, etc.)
│   ├── ProfileCard.js
│   ├── MapComponent.js
│   ├── SearchFilter.js
│   └── LoadingSpinner.js
├── context/            # ProfileContext for state management
│   └── ProfileContext.js
├── pages/              # Main pages (Home, AdminPanel, ProfileDetails)
│   ├── Home.js
│   ├── AdminPanel.js
│   └── ProfileDetails.js
├── App.js              # Root component with routing
├── index.js            # Entry point
└── styles/             # CSS files for styling
    └── Home.css
```

## Prerequisites
- **Node.js**: Version 14.x or higher.
- **npm**: Version 6.x or higher.
- Ensure `react-toastify` styles are included in your app:
  ```javascript
  import 'react-toastify/dist/ReactToastify.css';
  ```

## Development
- **Scripts**:
  - `npm start`: Runs the app in development mode.
  - `npm build`: Builds the app for production.
- **Dependencies**:
  - `react`, `react-dom`
  - `react-router-dom`
  - `react-toastify`
  - `maplibre-gl`

## License
This project is licensed under the MIT License

## Acknowledgments
- Built with inspiration from modern geolocation and profile management tools.
- Thanks to the open-source community for libraries like MapLibre-GL and React Toastify.

## Note
I have deployed the site at [https://explorer-zx2m.onrender.com](https://explorer-zx2m.onrender.com), but it has a small bug. Everything is working fine, but on the home page, I styled it such that the map should take up half the space on the right side, yet it is not showing in this app.
![Home Page Bug Screenshot](/image.png)
---
*Last Updated: April 02, 2025*
```


