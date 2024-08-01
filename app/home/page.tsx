import { Container } from "@mantine/core";
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
    <Container size={"lg"}>
      <HeroSection />
      <ServiceSection />
      <WhyUsSection />
      <TestimonialsSection />
      <TopShapeSection />
      <BookingSection />
    </Container>
  );
}
