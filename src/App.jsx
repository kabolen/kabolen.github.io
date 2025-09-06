import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MakeupBrushes from './pages/MakeupBrushes';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/makeup-brushes" element={<MakeupBrushes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
        </Routes>
    );
}

export default App;