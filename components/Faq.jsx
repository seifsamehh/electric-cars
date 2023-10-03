import { Bebas_Neue } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
import "../styles/faq.scss";
const Faq = () => {
  return (
    <section className="min-h-screen p-4 overflow-hidden faq">
      <ScrollParallax>
        <h2
          className={`${bebas.className} min-[290px]:text-5xl md:text-7xl min-[290px]:text-center md:text-left uppercase mt-12`}
        >
          Frequently Asked <span className="text-[#cdff49]">Questions</span>
        </h2>
      </ScrollParallax>
      <div className="collapse collapse-plus bg-[#cdff49] text-[#1e1e1e] my-4">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="text-2xl font-bold collapse-title">
          Are electric cars better for the environment?
        </div>
        <div className="collapse-content">
          <p className="text-xl">
            Yes, electric cars produce zero tailpipe emissions, reducing air
            pollution and contributing to a cleaner environment.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-[#cdff49] text-[#1e1e1e] my-4">
        <input type="radio" name="my-accordion-3" />
        <div className="text-2xl font-bold collapse-title">
          How far can electric cars travel on a single charge?
        </div>
        <div className="collapse-content">
          <p className="text-xl">
            The range of an electric car on a single charge varies depending on
            the make, model, and battery size. The average range for electric
            cars in 2023 is between 100 and 400 miles
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-[#cdff49] text-[#1e1e1e] my-4">
        <input type="radio" name="my-accordion-3" />
        <div className="text-2xl font-bold collapse-title">
          Is there a charging infrastructure available?
        </div>
        <div className="collapse-content">
          <p className="text-xl">
            The charging infrastructure for electric cars in the Middle East is
            still in its early stages of development, but it is growing rapidly.
            As of March 2023, there are over 10,000 public charging stations in
            the Middle East, with the number expected to reach 50,000 by the end
            of 2023. The majority of these charging stations are located in
            major cities, such as Dubai, Abu Dhabi, and Riyadh. However, there
            is a growing number of chargers being installed in smaller towns and
            rural areas.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-[#cdff49] text-[#1e1e1e] my-4">
        <input type="radio" name="my-accordion-3" />
        <div className="text-2xl font-bold collapse-title">
          What about the performance of electric cars?
        </div>
        <div className="collapse-content">
          <p className="text-xl">
            The performance of electric cars is constantly improving as
            technology advances. In recent years, there have been a number of
            high-performance electric cars released, such as the Tesla Model S
            Plaid and the Porsche Taycan Turbo S. These cars can accelerate from
            0 to 60 mph in under 2 seconds and have top speeds of over 200 mph.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
