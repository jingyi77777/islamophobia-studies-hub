import React from "react";
import Header from "@/components/islamophobia/Header";
import HeroSection from "@/components/islamophobia/HeroSection";
import CountryProfileSection from "@/components/islamophobia/CountryProfileSection";
import IslamophobiaSection from "@/components/islamophobia/IslamophobiaSection";
import PoliticalSection from "@/components/islamophobia/PoliticalSection";
import LegalSection from "@/components/islamophobia/LegalSection";
import EconomicSection from "@/components/islamophobia/EconomicSection";
import SurveillanceSection from "@/components/islamophobia/SurveillanceSection";
import MediaSection from "@/components/islamophobia/MediaSection";
import CounterSection from "@/components/islamophobia/CounterSection";
import ReferencesSection from "@/components/islamophobia/ReferencesSection";
import Footer from "@/components/islamophobia/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CountryProfileSection />
      <div className="bg-muted/30">
        <IslamophobiaSection />
      </div>
      <PoliticalSection />
      <div className="bg-muted/30">
        <LegalSection />
      </div>
      <EconomicSection />
      <div className="bg-muted/30">
        <SurveillanceSection />
      </div>
      <MediaSection />
      <div className="bg-muted/30">
        <CounterSection />
      </div>
      <ReferencesSection />
      <Footer />
    </div>
  );
}