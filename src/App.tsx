import Header from './components/Header';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-[Inter]">
      <Header />
      <main>
        <Hero />
        <Inventory />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
