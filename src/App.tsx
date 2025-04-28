import AboutUs from "./components/about";
import Home from "./components/home";
import HowWeWork from "./components/home-work-section";
import PricingSection from "./components/pricing-section";
import TestimonialSection from "./components/testimonials";
import RootLayout from "./styles/template/RootLayout";

function App() {
  return (
    <>
      <RootLayout>
        <Home />
        <HowWeWork />
        <AboutUs />
        <TestimonialSection />
        <PricingSection />
      </RootLayout>
    </>
  );
}

export default App;
