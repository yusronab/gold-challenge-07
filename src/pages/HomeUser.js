import Navigation from '../components/Navigation'
import Heading from '../components/Home/Heading';
import SectionService from '../components/Home/SectionService';
import SectionWhyUs from '../components/Home/SectionWhyUs';
import SectionTesti from '../components/Home/SectionTesti';
import SectionFAQ from '../components/Home/SectionFAQ'
import Footer from '../components/Home/Footer';

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