import Navigation from '../components/Navigation'
import Heading from '../components/Heading';
import SectionService from '../components/SectionService';
import SectionWhyUs from '../components/SectionWhyUs';
import SectionTesti from '../components/SectionTesti';
import SectionFAQ from '../components/SectionFAQ'
import Footer from '../components/Footer';

export default function HomeUser() {
    return (
        <div>
          <Navigation />
          <Heading />
          <SectionService />
          <SectionWhyUs />
          <SectionTesti />
          <SectionFAQ />
          <Footer />
        </div>
    )
}