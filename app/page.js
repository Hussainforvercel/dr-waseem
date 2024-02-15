import Image from "next/image";
import Navbar from "./Header/page";
import Hero from "./Header/hero";
import MarqueeSlider from "./card/murquee";
import About from "./aboutDoc/about";
import Card from "./card/card";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import Statatics from "./Statics/Statatics";
import Team from "./Team/Team";
import Page from "./Teamcards/page";
import AboutDoc from "./aboutdoctor/page";
import Commitment from "./commitment/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
   <Hero/> 
   <MarqueeSlider/>
  <AboutDoc/>
  <Commitment/>
<Card/>
<Statatics/>
<Page/>
<Gallery/>

<Footer/>
    </div>
  
  );
}
