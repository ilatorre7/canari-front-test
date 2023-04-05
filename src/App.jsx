import { Global } from '@emotion/react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import StateOfArtSection from './components/StateOfArtSection';
import LaptopSection from './components/LaptopSection';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0
          }
        }}
      />
      <Hero />
      <ProductSection />
      <StateOfArtSection />
      <LaptopSection />
      <Footer />
    </div>
  )
}

export default App
