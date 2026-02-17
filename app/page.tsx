import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import GallerySection from "@/components/GallerySection";
import DentistSection from "@/components/DentistSection";
import BookingSection from "@/components/BookingSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <Services />
      <WhyChooseUs />
      <DentistSection />
      <GallerySection />
      <BookingSection />
      <Footer />
    </>
  );
}
