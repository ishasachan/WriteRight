import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>WriteRight - About</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <About/>

      <Footer />
    </div>
  );
}