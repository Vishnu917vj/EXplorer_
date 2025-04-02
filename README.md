##PROFILE EXPLORER
Overview
Profile Explorer is a React-based application that displays user profiles alongside an interactive map. Users can view, search, and manage profiles, with real-time geolocation integration using MapLibre-GL.

Features
#Home Page:

The left side displays a list of user profiles in a column.

The right side features an interactive map.

Clicking "Summary" moves the map to highlight the selected user's location.

Clicking on a profile takes you to a detailed profile page.

#Profile Details Page:

Displays full details of a user.

Integrates an interactive map showing the user's location.

#Admin Panel (localhost:3000/admin):

Add new users.

Edit existing users.

Delete users.

Ensures error handling, preventing invalid geolocations.

#Search Feature:

Users can search for profiles from the home page.

Technology Used
React.js

MapLibre-GL (for maps)

React Router (for navigation)

State Management (React Hooks)