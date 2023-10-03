import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
import "../styles/offer.scss";
import Link from "next/link";

const Offer = () => {
  return (
    <section className="offer overflow-hidden p-4">
      <div className="offer-content relative flex justify-center items-center gap-8 overflow-hidden rounded-2xl px-4 md:mx-12 min-[290px]:flex-wrap md:flex-nowrap">
        <div className="left md:w-[40%]">
          <ScrollParallax>
            <h2
              className={`${bebas.className} min-[290px]:text-5xl md:text-7xl min-[290px]:text-center md:text-left uppercase mb-6`}
            >
              Special <span className="text-[#cdff49]">Offer Today</span>
            </h2>
          </ScrollParallax>
          <p className="leading-8 min-[290px]:text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Dui in commodo ut vel quam
            vitae ullamcorper aenean aliquet.
          </p>
          <Link href="/shop">
            <div className="shop flex min-[290px]:justify-center md:justify-start items-center gap-8 bg-[#cdff49] rounded-full min-[290px]:w-full md:w-fit px-6 py-2">
              <p className="text-[#1e1e1e] font-bold text-xl">Shop Now</p>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.9999" cy="18" r="18" fill="#0E0E0F" />
                <path
                  d="M22.8534 18.3536C23.0487 18.1583 23.0487 17.8417 22.8534 17.6464L19.6715 14.4645C19.4762 14.2692 19.1596 14.2692 18.9643 14.4645C18.7691 14.6597 18.7691 14.9763 18.9643 15.1716L21.7928 18L18.9643 20.8284C18.7691 21.0237 18.7691 21.3403 18.9643 21.5355C19.1596 21.7308 19.4762 21.7308 19.6715 21.5355L22.8534 18.3536ZM13.9999 18.5L22.4999 18.5L22.4999 17.5L13.9999 17.5L13.9999 18.5Z"
                  fill="#CFF95D"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="right md:w-[60%]">
          <MouseParallax>
            <Image
              src="/Car3.webp"
              alt="car"
              aria-label="car"
              width={800}
              height={800}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            />
          </MouseParallax>
        </div>
        <Image
          src="/offerBtn.webp"
          alt="offer button"
          aria-label="offer button"
          width={100}
          height={100}
          className="absolute top-2 left-0 min-[290px]:hidden md:block"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
        />
      </div>
    </section>
  );
};

export default Offer;
