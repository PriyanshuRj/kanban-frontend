import React from 'react'
import Hero from '../components/LandingPage/Hero';
import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import FAQ from '../components/LandingPage/FAQ';
import Features from '../components/LandingPage/Features';
import Pricing from '../components/LandingPage/Pricing';
import Testimonial from '../components/LandingPage/Testimonial';

export default function LandingPage() {

    return (
        <div >
            < Header />
            <Hero />
            <Features />
            <Testimonial />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    )
}
