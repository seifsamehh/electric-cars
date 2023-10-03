import { Bebas_Neue } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const Interest = () => {
  return (
    <section className="interest overflow-hidden min-h-screen p-4 flex justify-center items-center relative">
      <h2
        className={`${bebas.className} min-[290px]:text-4xl md:text-8xl text-center max-w-2xl bg-gradient-to-r from-[#d7fc70] via-[#cdff49] to-[#bcff06] text-transparent bg-clip-text`}
      >
        The battery is full. Charge your account now!
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        className="absolute top-0 left-0 w-full h-full"
      >
        <path
          fill="none"
          className="fill-[#faf4f4] dark:fill-[#1e1e1e]"
          d="M285.02 47.06c-10.1-8.49-21.23-15.06-33.53-19.83-6-2.33-8.6 7.34-2.66 9.64 10.59 4.11 20.43 9.95 29.12 17.26 4.9 4.11 12.01-2.92 7.07-7.07zM287.62 30.82a219.99 219.99 0 00-15.53-15.01c-4.82-4.22-11.92 2.82-7.07 7.07 5.42 4.75 10.6 9.75 15.53 15.01 4.41 4.7 11.47-2.38 7.07-7.07zM48.63 21.25C38.35 34.58 26.2 46.49 12.7 56.54c-5.1 3.8-.12 12.48 5.05 8.63 14.98-11.15 28.12-24.09 39.52-38.88 3.93-5.09-4.76-10.08-8.63-5.05zM23.16 16.81c-3.21 4.91-5.74 10.16-7.74 15.66-.92 2.54 1.04 5.48 3.49 6.15 2.78.76 5.22-.95 6.15-3.49 1.71-4.7 4-9.09 6.73-13.27 3.53-5.4-5.12-10.42-8.63-5.05zM52.63 286.67c-7.8-14.14-18.48-26.09-31.44-35.69-5.18-3.83-10.17 4.84-5.05 8.63 11.55 8.56 20.92 19.53 27.85 32.1 3.11 5.64 11.75.6 8.63-5.05zM32.51 285.07c-2.94-5.67-7.03-10.7-12.03-14.67-2.11-1.68-5.01-2.06-7.07 0-1.74 1.74-2.13 5.38 0 7.07 4.41 3.5 7.88 7.64 10.47 12.65 2.97 5.71 11.6.66 8.63-5.05zM275.9 259.01c-8.85 5.47-16.97 11.97-24.19 19.46-4.47 4.63 2.59 11.71 7.07 7.07 6.66-6.9 14.01-12.86 22.17-17.9 5.47-3.38.45-12.03-5.05-8.63zM286.53 272.74c-2.49-1.32-5.32-.55-6.84 1.79l-4.74 7.29c-1.43 2.2-.52 5.62 1.79 6.84 2.49 1.32 5.32.55 6.84-1.79l4.74-7.29c1.43-2.2.52-5.62-1.79-6.84z"
        ></path>
      </svg>
    </section>
  );
};

export default Interest;
