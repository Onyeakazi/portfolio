import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/navbar';
import Home from './pages/home/home';
import ProjectCard from './pages/Projects/projects';
import Footer from './components/footer/footer';
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectCard />} />
                </Routes>
                <Footer />
            </div>
    </Router>
    );
}

export default App;
