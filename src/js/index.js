// import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

// import your main App component
import App from "../App"; // Assuming App.js is in src directory


// render your React application
ReactDOM.createRoot(document.getElementById('app')).render(<App />);

