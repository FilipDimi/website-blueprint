import React from "react";
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="">Home</Link>
        <Link to="about">About us</Link>
        <Link to="contact">Contact</Link>
      </div>
    ),
  },
  {
    path: '',
    element: <div>Home</div>
  },
  {
    path: 'about',
    element: <div>About</div>
  },
  {
    path: 'contact',
    element: <div>Contact</div>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
