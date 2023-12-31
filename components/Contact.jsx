import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Contact = () => {
  return (
    <section className="contact overflow-hidden p-4 flex justify-between items-center min-[290px]:flex-wrap md:flex-nowrap">
      <div className="left">
        <ScrollParallax>
          <h2
            className={`${bebas.className} min-[290px]:text-5xl md:text-7xl min-[290px]:text-center md:text-left uppercase mb-6`}
          >
            LET’S <span className="text-[#cdff49]">TALK</span>
          </h2>
        </ScrollParallax>
        <div className="lists flex flex-col gap-4 mb-6">
          <div className="list flex justify-start items-start gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.48936 1.39259C7.34043 0.950134 8.7234 0.465538 9.55319 0.318053C10.383 0.149498 11.4043 0.00201282 11.8511 0.00201282C12.2766 -0.0190565 13.383 0.128429 14.2979 0.296984C15.2128 0.486608 16.6383 0.971203 17.5106 1.41366C18.383 1.83505 19.5957 2.65675 20.1915 3.24669C20.8085 3.81556 21.6808 4.86903 22.1277 5.56432C22.5957 6.25961 23.1915 7.54484 23.4894 8.40868C23.8723 9.6307 24 10.4524 24 11.9905C24 13.5285 23.8723 14.3502 23.4894 15.5723C23.1915 16.4361 22.5957 17.7213 22.1277 18.4166C21.6808 19.1119 20.8085 20.1443 20.1915 20.7343C19.5957 21.3242 18.383 22.1459 17.5106 22.5673C16.6383 22.9887 15.1915 23.4943 14.2979 23.6629C13.383 23.8525 12.3617 24 12 24C11.6596 24 10.617 23.8525 9.7234 23.6629C8.80851 23.4943 7.3617 22.9887 6.48936 22.5673C5.61702 22.1459 4.40425 21.3242 3.80851 20.7343C3.19149 20.1654 2.31915 19.1119 1.87234 18.4166C1.40426 17.7213 0.808511 16.4361 0.510638 15.5723C0.12766 14.3502 0 13.5285 0 11.9905C0 10.4524 0.12766 9.6307 0.510638 8.40868C0.808511 7.54484 1.40426 6.25961 1.87234 5.56432C2.31915 4.86903 3.19149 3.83663 3.80851 3.24669C4.40425 2.67782 5.61702 1.83505 6.48936 1.39259Z"
                fill="#D2FB5E"
              />
              <path
                d="M13.2766 10.1363C14.3617 8.59825 15.4255 7.24981 15.6595 7.16554C15.8936 7.06019 16.2553 7.03912 16.4468 7.10233C16.6383 7.16554 17.1063 7.50264 17.4893 7.86082C17.8723 8.219 18.1702 8.7036 18.1702 8.93536C18.1914 9.16712 17.3617 10.5366 16.3404 11.9904C15.3191 13.4442 14.0851 15.1719 13.5744 15.825C13.0638 16.4993 12.4468 17.1524 12.2127 17.2578C11.9787 17.3631 11.5319 17.4684 11.1914 17.4684C10.7446 17.4684 10.2127 17.0471 8.74464 15.5722C7.72336 14.5398 6.65953 13.3178 6.36166 12.8753C5.93613 12.2643 5.85102 11.9904 5.99996 11.569C6.10634 11.2741 6.48932 10.7895 6.8723 10.4524C7.234 10.1363 7.65953 9.88348 7.78719 9.88348C7.93613 9.90455 8.25528 10.0099 8.5106 10.1574C8.74464 10.3049 9.42549 10.9369 9.99996 11.569C10.5744 12.2011 11.1063 12.77 11.1914 12.8332C11.2766 12.8964 12.2127 11.6744 13.2766 10.1363Z"
                fill="#0E0E0F"
              />
            </svg>
            <p>We will respond to you within 24 hours.</p>
          </div>
          <div className="list flex justify-start items-start gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.48936 1.39259C7.34043 0.950134 8.7234 0.465538 9.55319 0.318053C10.383 0.149498 11.4043 0.00201282 11.8511 0.00201282C12.2766 -0.0190565 13.383 0.128429 14.2979 0.296984C15.2128 0.486608 16.6383 0.971203 17.5106 1.41366C18.383 1.83505 19.5957 2.65675 20.1915 3.24669C20.8085 3.81556 21.6808 4.86903 22.1277 5.56432C22.5957 6.25961 23.1915 7.54484 23.4894 8.40868C23.8723 9.6307 24 10.4524 24 11.9905C24 13.5285 23.8723 14.3502 23.4894 15.5723C23.1915 16.4361 22.5957 17.7213 22.1277 18.4166C21.6808 19.1119 20.8085 20.1443 20.1915 20.7343C19.5957 21.3242 18.383 22.1459 17.5106 22.5673C16.6383 22.9887 15.1915 23.4943 14.2979 23.6629C13.383 23.8525 12.3617 24 12 24C11.6596 24 10.617 23.8525 9.7234 23.6629C8.80851 23.4943 7.3617 22.9887 6.48936 22.5673C5.61702 22.1459 4.40425 21.3242 3.80851 20.7343C3.19149 20.1654 2.31915 19.1119 1.87234 18.4166C1.40426 17.7213 0.808511 16.4361 0.510638 15.5723C0.12766 14.3502 0 13.5285 0 11.9905C0 10.4524 0.12766 9.6307 0.510638 8.40868C0.808511 7.54484 1.40426 6.25961 1.87234 5.56432C2.31915 4.86903 3.19149 3.83663 3.80851 3.24669C4.40425 2.67782 5.61702 1.83505 6.48936 1.39259Z"
                fill="#D2FB5E"
              />
              <path
                d="M13.2766 10.1363C14.3617 8.59825 15.4255 7.24981 15.6595 7.16554C15.8936 7.06019 16.2553 7.03912 16.4468 7.10233C16.6383 7.16554 17.1063 7.50264 17.4893 7.86082C17.8723 8.219 18.1702 8.7036 18.1702 8.93536C18.1914 9.16712 17.3617 10.5366 16.3404 11.9904C15.3191 13.4442 14.0851 15.1719 13.5744 15.825C13.0638 16.4993 12.4468 17.1524 12.2127 17.2578C11.9787 17.3631 11.5319 17.4684 11.1914 17.4684C10.7446 17.4684 10.2127 17.0471 8.74464 15.5722C7.72336 14.5398 6.65953 13.3178 6.36166 12.8753C5.93613 12.2643 5.85102 11.9904 5.99996 11.569C6.10634 11.2741 6.48932 10.7895 6.8723 10.4524C7.234 10.1363 7.65953 9.88348 7.78719 9.88348C7.93613 9.90455 8.25528 10.0099 8.5106 10.1574C8.74464 10.3049 9.42549 10.9369 9.99996 11.569C10.5744 12.2011 11.1063 12.77 11.1914 12.8332C11.2766 12.8964 12.2127 11.6744 13.2766 10.1363Z"
                fill="#0E0E0F"
              />
            </svg>
            <p>We’ll sign an NDA if requested.</p>
          </div>
          <div className="list flex justify-start items-start gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.48936 1.39259C7.34043 0.950134 8.7234 0.465538 9.55319 0.318053C10.383 0.149498 11.4043 0.00201282 11.8511 0.00201282C12.2766 -0.0190565 13.383 0.128429 14.2979 0.296984C15.2128 0.486608 16.6383 0.971203 17.5106 1.41366C18.383 1.83505 19.5957 2.65675 20.1915 3.24669C20.8085 3.81556 21.6808 4.86903 22.1277 5.56432C22.5957 6.25961 23.1915 7.54484 23.4894 8.40868C23.8723 9.6307 24 10.4524 24 11.9905C24 13.5285 23.8723 14.3502 23.4894 15.5723C23.1915 16.4361 22.5957 17.7213 22.1277 18.4166C21.6808 19.1119 20.8085 20.1443 20.1915 20.7343C19.5957 21.3242 18.383 22.1459 17.5106 22.5673C16.6383 22.9887 15.1915 23.4943 14.2979 23.6629C13.383 23.8525 12.3617 24 12 24C11.6596 24 10.617 23.8525 9.7234 23.6629C8.80851 23.4943 7.3617 22.9887 6.48936 22.5673C5.61702 22.1459 4.40425 21.3242 3.80851 20.7343C3.19149 20.1654 2.31915 19.1119 1.87234 18.4166C1.40426 17.7213 0.808511 16.4361 0.510638 15.5723C0.12766 14.3502 0 13.5285 0 11.9905C0 10.4524 0.12766 9.6307 0.510638 8.40868C0.808511 7.54484 1.40426 6.25961 1.87234 5.56432C2.31915 4.86903 3.19149 3.83663 3.80851 3.24669C4.40425 2.67782 5.61702 1.83505 6.48936 1.39259Z"
                fill="#D2FB5E"
              />
              <path
                d="M13.2766 10.1363C14.3617 8.59825 15.4255 7.24981 15.6595 7.16554C15.8936 7.06019 16.2553 7.03912 16.4468 7.10233C16.6383 7.16554 17.1063 7.50264 17.4893 7.86082C17.8723 8.219 18.1702 8.7036 18.1702 8.93536C18.1914 9.16712 17.3617 10.5366 16.3404 11.9904C15.3191 13.4442 14.0851 15.1719 13.5744 15.825C13.0638 16.4993 12.4468 17.1524 12.2127 17.2578C11.9787 17.3631 11.5319 17.4684 11.1914 17.4684C10.7446 17.4684 10.2127 17.0471 8.74464 15.5722C7.72336 14.5398 6.65953 13.3178 6.36166 12.8753C5.93613 12.2643 5.85102 11.9904 5.99996 11.569C6.10634 11.2741 6.48932 10.7895 6.8723 10.4524C7.234 10.1363 7.65953 9.88348 7.78719 9.88348C7.93613 9.90455 8.25528 10.0099 8.5106 10.1574C8.74464 10.3049 9.42549 10.9369 9.99996 11.569C10.5744 12.2011 11.1063 12.77 11.1914 12.8332C11.2766 12.8964 12.2127 11.6744 13.2766 10.1363Z"
                fill="#0E0E0F"
              />
            </svg>
            <p>Access to dedicated product specialists.</p>
          </div>
        </div>
        <Image
          src="/Car4.webp"
          alt="car"
          aria-label="car"
          width={400}
          height={400}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="middle min-[290px]:hidden md:block">
        <MouseParallax>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            width={400}
            height={400}
          >
            <path
              fill="#cdff49"
              d="M224.49 197.82c-25.8-11.64-51.65-23.18-77.4-34.92-13.9-6.34-32.02-15.07-39.07-29.66 4.38.79 8.82 1.3 13.26 1.55 12.26.69 25.01-2.38 29.18-15.31 3.41-10.56-.88-22.85-10.74-28.23-10.49-5.73-24.41-3.62-32.96 4.63-7 6.75-10.2 16.72-9.65 26.36-3.68-1.19-6.84-2.41-9.08-3.44-23.99-11.06-41.64-34.78-38.98-61.99.5-5.12-7.5-5.09-8 0-2.76 28.22 14.85 54.36 39.32 67.11 5.86 3.05 12.03 5.43 18.37 7.19 3.59 11.33 12.19 20.06 21.86 26.63 13.67 9.3 29.6 15.28 44.59 22.05l55.26 24.93c4.66 2.1 8.73-4.79 4.04-6.91zM105.06 121.5c-.46-10.87 5.27-22.11 16.42-24.86 9.83-2.43 20.82 2.51 22.04 13.32 2.24 19.81-20.27 18.95-38.15 14.61-.15-1-.26-2.02-.3-3.07z"
            ></path>
            <path
              fill="#cdff49"
              d="M258.06 206.7a805.18 805.18 0 01-47.48-48.18c-3.47-3.82-9.11 1.85-5.66 5.66a806.35 806.35 0 0042.69 43.65c-21.36 7.36-41.45 17.93-59.56 31.5-4.07 3.05-.09 10 4.04 6.91 19.42-14.55 41.03-25.67 64.21-32.86 2.77-.86 4.04-4.56 1.77-6.69z"
            ></path>
          </svg>
        </MouseParallax>
      </div>
      <div className="right">
        <form action="">
          <div className="personal-information flex items-center gap-8 min-[290px]:flex-wrap md:flex-nowrap">
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="First Name"
              className="bg-transparent border-b-2 border-b-solid border-b-[#cdff49] outline-0 py-2 pl-2 pr-8 min-[290px]:w-full md:w-auto"
            />
            <input
              type="text"
              name="LastName"
              id="LastName"
              placeholder="Last Name"
              className="bg-transparent border-b-2 border-b-solid border-b-[#cdff49] outline-0 py-2 pl-2 pr-8 min-[290px]:w-full md:w-auto"
            />
          </div>
          <div className="message my-6">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="resize-none bg-transparent border-b-2 border-b-solid border-b-[#cdff49] outline-0 py-2 pl-2 pr-8 w-full"
            ></textarea>
          </div>
          <div className="confirmation flex justify-start items-center gap-6 min-[290px]:flex-wrap md:flex-nowrap">
            <p>
              By sending this form I confirm that
              <br /> I have read and accept the{" "}
              <Link href="/privacy" className="text-[#cdff49] font-bold">
                Privacy Policy
              </Link>
            </p>
            <button
              type="submit"
              className="flex justify-start items-center gap-8 bg-[#cdff49] text-[#1e1e1e] font-bold text-xl rounded-full w-fit px-6 py-2"
            >
              Send A Message{" "}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18.0001" cy="18" r="18" fill="#0E0E0F" />
                <path
                  d="M22.8537 18.3536C23.0489 18.1583 23.0489 17.8417 22.8537 17.6464L19.6717 14.4645C19.4764 14.2692 19.1599 14.2692 18.9646 14.4645C18.7693 14.6597 18.7693 14.9763 18.9646 15.1716L21.793 18L18.9646 20.8284C18.7693 21.0237 18.7693 21.3403 18.9646 21.5355C19.1598 21.7308 19.4764 21.7308 19.6717 21.5355L22.8537 18.3536ZM14.0001 18.5L22.5001 18.5L22.5001 17.5L14.0001 17.5L14.0001 18.5Z"
                  fill="#CFF95D"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
