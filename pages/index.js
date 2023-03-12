import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cover from '../components/Cover';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>WriteRight</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Hero />
      <Cover />
      <Footer />
    </div>
  );
}