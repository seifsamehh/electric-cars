import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
import Plx from "react-plx";
import "../styles/hero.scss";

const Hero = () => {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: -100,
          endValue: 200,
          property: "translateX",
        },
      ],
    },
  ];
  const parallaxDataMobile = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: 100,
          property: "translateX",
        },
      ],
    },
  ];
  return (
    <section className="heroo overflow-hidden min-h-screen relative flex justify-around items-center min-[290px]:flex-wrap md:flex-nowrap">
      <div className="lg-screen md:flex justify-around items-center min-[290px]:flex-wrap md:flex-nowrap w-screen min-[290px]:hidden">
        <div className="left">
          <Plx parallaxData={parallaxData}>
            <Image
              src="/FirstCar.webp"
              alt="hero car"
              aria-label="hero car"
              width={700}
              height={700}
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            />
          </Plx>
        </div>
        <div className="right">
          <h1
            className={`${bebas.className} xl:text-8xl md:text-6xl dark:text-[#faf4f4]`}
          >
            the <span className="text-[#cdff49]">Future</span>
            <br /> of Driving
          </h1>
          <p className="text-xl dark:text-[#faf4f4]">
            Discover the Power of
            <br /> Electric Cars
          </p>
        </div>
        <div className="bottom absolute bottom-[10%] right-[2%]">
          <Link
            href="/"
            className="bg-[#cdff49] text-[#1e1e1e] py-8 pl-16 pr-10 text-3xl rounded-md font-bold"
          >
            Explore Now
          </Link>
          <svg
            width={35}
            height={35}
            fill="#1e1e1e"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-90%] right-0"
          >
            <path
              fillRule="evenodd"
              d="M19.5 5.125a.625.625 0 0 0-.625-.625h-7.5a.625.625 0 1 0 0 1.25h5.991L4.682 18.433a.626.626 0 1 0 .885.884L18.25 6.634v5.991a.624.624 0 1 0 1.25 0v-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile-screen min-[290px]:flex justify-center items-center min-[290px]:flex-wrap md:flex-nowrap w-screen md:hidden">
        <h1
          className={`${bebas.className} text-5xl text-center dark:text-[#faf4f4]`}
        >
          the <span className="text-[#cdff49] pr-1">Future</span>
          of Driving
        </h1>
        <Plx parallaxData={parallaxDataMobile}>
          <Image
            src="/FirstCar.webp"
            alt="hero car"
            aria-label="hero car"
            width={400}
            height={400}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
          />
        </Plx>
        <p className="text-xl text-center dark:text-[#faf4f4] mix-blend-difference">
          Discover the Power of Electric Cars
        </p>
        <Link
          href="/"
          className="bg-[#cdff49] text-[#1e1e1e] py-4 px-16 text-3xl rounded-md font-bold"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
