import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Philosophy } from "./sections/Philosophy";
import { SignatureCoffee } from "./sections/SignatureCoffee";
import { Experience } from "./sections/Experience";
import { Space } from "./sections/Space";
import { Hours } from "./sections/Hours";
import { Visit } from "./sections/Visit";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Philosophy />
        <SignatureCoffee />
        <Experience />
        <Space />
        <Hours />
        <Visit />
      </main>

      <Footer />
    </>
  );
}
