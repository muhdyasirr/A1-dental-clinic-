import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import GallerySection from "@/components/GallerySection";
import DentistSection from "@/components/DentistSection";
import BookingSection from "@/components/BookingSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import OurVision from "@/components/OurVision";
import Chief from "@/components/Chief";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>

      <Hero />
      <Hero2 />
      <Services />
      <OurVision />
      <WhyChooseUs />
      <Chief />
      <DentistSection />
      <GallerySection />
      <BookingSection />
      <FloatingContact />
      <Footer />
    </>
  );
}
