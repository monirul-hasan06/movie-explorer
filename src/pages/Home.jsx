import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
// You can create a simple Footer component later

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroBanner />
      </main>
      <footer>
        <p>© 2026 MovieExplorer</p>
      </footer>
    </div>
  );
}

export default Home;