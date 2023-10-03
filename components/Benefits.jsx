import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
import "../styles/benefits.scss";
/**
 * Renders the Benefits component.
 *
 * @return {JSX.Element} The JSX element representing the Benefits component.
 */
const Benefits = () => {
  return (
    <section className="benefits relative overflow-hidden p-4 min-h-screen flex justify-center items-start flex-col">
      <div className="top">
        <ScrollParallax>
          <h2
            className={`${bebas.className} min-[290px]:text-5xl md:text-7xl min-[290px]:text-center md:text-left uppercase mb-16`}
          >
            <span className="text-[#cdff49]">Benefits </span>
            of Driving Electric Cars
          </h2>
        </ScrollParallax>
      </div>
      <div className="bottom">
        <div className="upper flex justify-center items-center gap-12 min-[290px]:mb-12 md:mb-[15rem] min-[290px]:flex-wrap md:flex-nowrap">
          <div className="box md:w-1/2 md:h-56 bg-[#1e1e1e] dark:bg-[#faf4f4] rounded-lg p-8 relative">
            <h3
              className={`${bebas.className} text-3xl min-[290px]:text-center md:text-left`}
            >
              Reduced Emissions
            </h3>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              Contribute to a cleaner environment by driving a vehicle with zero
              tailpipe emissions. Electric cars produce no exhaust gases,
              helping to reduce air pollution and combat climate change. This
              benefit significantly contributes to improved air quality and a
              healthier planet for future generations.
            </p>
            <Image
              src="/reducedBtn.webp"
              alt="reduced button"
              aria-label="reduced button"
              width={50}
              height={50}
              className="absolute top-0 left-0 z-[-1]"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="box md:w-1/2 md:h-56 bg-[#1e1e1e] dark:bg-[#faf4f4] rounded-lg p-8 relative">
            <h3
              className={`${bebas.className} text-3xl min-[290px]:text-center md:text-left`}
            >
              Lower Operating Costs
            </h3>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              Save money on fuel and maintenance with lower operating and
              maintenance costs. Electric cars have fewer moving parts compared
              to traditional combustion engine vehicles, leading to reduced
              maintenance requirements and fewer chances of breakdowns.
              Additionally, electricity is generally cheaper than gasoline,
              resulting in lower fuel costs over time.
            </p>
            <Image
              src="/costBtn.webp"
              alt="cost button"
              aria-label="cost button"
              width={50}
              height={50}
              className="absolute top-0 right-0 z-[-1]"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <div className="down flex justify-center items-center gap-12 min-[290px]:flex-wrap md:flex-nowrap">
          <div className="box md:w-1/2 md:h-56 bg-[#1e1e1e] dark:bg-[#faf4f4] rounded-lg p-8 relative">
            <h3
              className={`${bebas.className} text-3xl min-[290px]:text-center md:text-left`}
            >
              Quiet Operation
            </h3>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              Enjoy a peaceful ride with the quiet and smooth operation of
              electric cars. Electric vehicles are remarkably quiet compared to
              their gasoline counterparts. This quiet operation enhances the
              driving experience and reduces noise pollution in urban
              environments, creating a more serene and comfortable atmosphere on
              the road.
            </p>
            <Image
              src="/quietBtn.webp"
              alt="quiet button"
              aria-label="quiet button"
              width={50}
              height={50}
              className="absolute bottom-0 left-0 z-[-1]"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="box md:w-1/2 md:h-56 bg-[#1e1e1e] dark:bg-[#faf4f4] rounded-lg p-8 relative">
            <h3
              className={`${bebas.className} text-3xl min-[290px]:text-center md:text-left`}
            >
              Convenience of Charging
            </h3>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              Enjoy a peaceful ride with the quiet and smooth operation of
              electric cars. Electric vehicles are remarkably quiet compared to
              their gasoline counterparts. This quiet operation enhances the
              driving experience and reduces noise pollution in urban
              environments, creating a more serene and comfortable atmosphere on
              the road.
            </p>
            <Image
              src="/chargeBtn.webp"
              alt="charge button"
              aria-label="charge button"
              width={50}
              height={50}
              className="absolute bottom-0 right-0 z-[-1]"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
      <Image
        src="/Car2.webp"
        alt="car"
        aria-label="car"
        width={400}
        height={400}
        className="absolute top-[40%] left-[37%] z-10 min-[290px]:hidden md:block"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
      />
    </section>
  );
};

export default Benefits;
