import React from "react";
import Header from "@/components/islamophobia/Header";
import HeroSection from "@/components/islamophobia/HeroSection";
import CountryProfileSection from "@/components/islamophobia/CountryProfileSection";
import TheoreticalFrameworkSection from "@/components/islamophobia/TheoreticalFrameworkSection";
import LegalPolicySection from "@/components/islamophobia/LegalPolicySection";
import SocietyCultureSection from "@/components/islamophobia/SocietyCultureSection";
import CountermeasuresSection from "@/components/islamophobia/CountermeasuresSection";
import ReferencesSection from "@/components/islamophobia/ReferencesSection";
import Footer from "@/components/islamophobia/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CountryProfileSection />
      <div className="bg-muted/40">
        <TheoreticalFrameworkSection />
      </div>
      <LegalPolicySection />
      <div className="bg-muted/40">
        <SocietyCultureSection />
      </div>
      <CountermeasuresSection />
      <div className="bg-muted/40">
        <ReferencesSection />
      </div>
      <Footer />
    </div>
  );
}