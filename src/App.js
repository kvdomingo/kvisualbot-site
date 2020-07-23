import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Commands/Content';


export default function App() {
    return (
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
}
