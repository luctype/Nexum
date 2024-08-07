import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Banner from "./Components/Banner.js";
import Services from "./Components/Services.js";
import Cases from "./Components/Cases.js";
import Depoiments from "./Components/Depoiments.js";
import Contacts from "./Components/Contact.js";
import Location from "./Components/Location.js";
import FAQ from "./Components/FAQ.js";

function App() {
  return (
    <div className="App bg-[#171717]">
      <Header />
      <Banner />
      <Services />
      <Cases />
      <Depoiments />
      <Contacts />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
