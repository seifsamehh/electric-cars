"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

import { MouseParallax } from "react-just-parallax";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/Hero"));
const FutureCars = dynamic(() => import("@/components/FutureCars"));
const Features = dynamic(() => import("@/components/Features"));
const Benefits = dynamic(() => import("@/components/Benefits"));
const Offer = dynamic(() => import("@/components/Offer"));
const Contact = dynamic(() => import("@/components/Contact"));
const Partners = dynamic(() => import("@/components/Partners"));
const Community = dynamic(() => import("@/components/Community"));
const Faq = dynamic(() => import("@/components/Faq"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Interest = dynamic(() => import("@/components/Interest"));
const Footer = dynamic(() => import("@/components/Footer"));
import "../public/main.scss";

/**
 * A description of the Home function.
 *
 * @return {void}
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    /**
     * Handles the scroll event and updates the progress value.
     *
     * @return {void}
     */
    const handleScroll = () => {
      // Calculate the progress value based on the user's scroll position
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${Math.round((scrollTop / windowHeight) * 100)}%`;

      setProgressValue(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen english-version bg-[#1e1e1e] text-[#faf4f4] dark:bg-[#faf4f4] dark:text-[#1e1e1e]">
      {isLoading ? (
        <section
          className={`bg-[#1e1e1e] loader-page relative z-10 flex items-center justify-center flex-col gap-4 min-h-screen overflow-hidden ${bebas.className}`}
        >
          <Image
            src="/loader.gif"
            alt="loader"
            aria-label="loader"
            width={300}
            height={300}
            priority={true}
          />
          <MouseParallax>
            <h1 className="text-6xl text-center">Electric Cars</h1>
          </MouseParallax>
        </section>
      ) : (
        <>
          <Header />
          <Hero />
          <FutureCars />
          <Features />
          <Benefits />
          <Offer />
          <Contact />
          <Partners />
          <Community />
          <Faq />
          <Testimonials />
          <Interest />
          <Footer />
          {/* prograss */}
          <div className="fixed z-10 left-4 bottom-4 bg-[#cdff49] text-[#1e1e1e] w-20 h-20 flex justify-center items-center rounded-full">
            <div
              className="text-3xl font-bold value"
              style={{
                "--value": `calc(${progressValue} + ${
                  progressValue > 0 ? "1%" : "0"
                })`,
              }}
            >
              {progressValue}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
