import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import HowItWorks from "./components/HowItWorks";
import Countries from "./components/Countries";
import KillerFeature from "./components/KillerFeature";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <HowItWorks />
        <Countries />
        <KillerFeature />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
