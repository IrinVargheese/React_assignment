import * as React from "react";
import { Routes, Route } from "react-router-dom";

// CSS StyleSheet
import "./assets/css/App.css"

// Pages and Components
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./assets/pages/Projects"
import Contact from "./assets/pages/Contact"
import Layout from "./assets/components/Layout";

// Single Page Application Code
export default function App() {
  return (
    <div>
      <h1 className="App-header">Anime - One Piece</h1>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </div>
  );
}

