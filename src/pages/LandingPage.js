import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/LandingPage/Hero';
import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import FAQ from '../components/LandingPage/FAQ';
import Features from '../components/LandingPage/Features';
import Pricing from '../components/LandingPage/Pricing';
const logo = process.env.PUBLIC_URL + "/logo.png"

export default function LandingPage() {

    return (
        <div >
            < Header />
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    )
}
