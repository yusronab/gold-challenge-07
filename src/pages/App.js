import Navigation from '../components/Navigation'
import Heading from '../components/Heading';
import SectionService from '../components/SectionService';
import SectionWhyUs from '../components/SectionWhyUs';
import SectionTesti from '../components/SectionTesti';
import SectionFAQ from '../components/SectionFAQ'
import Footer from '../components/Footer';

function App() {
  return (
    <div className="home-page">
      <Navigation />
      <Heading />
      <SectionService />
      <SectionWhyUs />
      <SectionTesti />
      <SectionFAQ />
      <Footer />
    </div>
  );
}

export default App;
