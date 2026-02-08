import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Office from "@/components/Office";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="min-h-screen bg-secondary pt-20">
      <Hero />
      <About />
      <Services />
      <Office />
      <Faqs />
      <Connect />
      <Contact/>
      <Footer />
    </main>
  );
};

export default Home;
