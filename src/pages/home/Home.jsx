import { Header } from '../../components/header/Header';
import { Hero } from '../../components/hero/Hero';
import { Sections } from '../../components/sections/Sections';
import { Footer } from '../../components/footer/Footer';

export function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sections />
      <Footer />
    </main>
  );
}