import { useState } from 'react';
import Faq from './scenes/FAQ';
import AboutUs from './scenes/aboutUs';
import Dentists from './scenes/dentists';
import Footer from './scenes/footer';
import Hero from './scenes/hero';
import Navbar from './scenes/navbar';
import Reviews from './scenes/reviews';
import Services from './scenes/services';
import { SelectedPage } from './shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <div className='app bg-gradient-primary'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero />
      <Services />
      <AboutUs />
      <Faq />
      <Dentists />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
