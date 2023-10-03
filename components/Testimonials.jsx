import { Bebas_Neue } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
import dynamic from "next/dynamic";
const TestimonialsCarousel = dynamic(() =>
  import("@/components/TestimonialsCarousel")
);

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
import "../styles/testimonials.scss";
const Testimonials = () => {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section className="testimonials overflow-hidden p-4">
      <ScrollParallax>
        <h2
          className={`${bebas.className} min-[290px]:text-5xl md:text-7xl min-[290px]:text-center md:text-left uppercase mt-12`}
        >
          CLIENTS
          <br />
          <span className="text-[#cdff49]">ABOUT US</span>
        </h2>
      </ScrollParallax>
      <TestimonialsCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Testimonials;
