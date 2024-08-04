import {
  BookingSection,
  HeroSection,
  ServiceSection,
  TestimonialsSection,
  TopShapeSection,
  WhyUsSection,
} from "./components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WhyUsSection />
      <TestimonialsSection />
      <TopShapeSection />
      <BookingSection />
    </>
  );
}
