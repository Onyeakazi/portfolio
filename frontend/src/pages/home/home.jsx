import React from 'react';
import HeroSection from '../../components/hero/hero';
import ProjectCard from '../../components/projectCard/projectCard';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';

function Home() {
    return (
        <div>
            <HeroSection />
            <ProjectCard />
            <About />
            <Contact />
        </div>
    );
}

export default Home;
