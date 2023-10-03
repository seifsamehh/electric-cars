import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const Footer = () => {
  return (
    <footer className="p-4 min-[290px]:pb-28 md:pb-0">
      <div className="top flex min-[290px]:justify-start md:justify-around items-center gap-8 min-[290px]:flex-wrap md:flex-nowrap">
        <div className="email">
          <p className={`${bebas.className} text-4xl`}>
            Subscribe to our newsletter to stay
            <br /> in touch with the latest.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="bg-transparent border-b-2 border-b-solid border-b-[#cdff49] outline-0 py-2 pl-2 pr-8"
          />
        </div>
        <div className="services">
          <h3 className={`${bebas.className} text-4xl`}>Services</h3>
          <ul>
            <li className="text-xl">Electric Cars</li>
            <li className="text-xl">Electric Bikes</li>
            <li className="text-xl">Electric Scooters</li>
            <li className="text-xl">Electric Trucks</li>
          </ul>
        </div>
        <div className="contact">
          <div className="email-contact">
            <h3 className={`${bebas.className} text-4xl`}>DROP US A LINE</h3>
            <p>mail@dream-car.com</p>
          </div>
          <div className="mt-6 whatsapp">
            <h3 className={`${bebas.className} text-4xl`}>CALL US</h3>
            <div className="flex items-center justify-start gap-4 number">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_120_1946)">
                  <mask
                    id="mask0_120_1946"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="28"
                    height="28"
                  >
                    <path d="M28 0H0V28H28V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_120_1946)">
                    <path
                      d="M7.37008 24.1996L7.82736 24.4264C9.69188 25.5269 11.8235 26.1021 13.9929 26.0902C20.6714 26.075 26.1586 20.6173 26.1586 13.9903C26.1586 10.7877 24.8767 7.71204 22.5972 5.44483C20.3208 3.15418 17.2106 1.86328 13.9693 1.86328C7.32131 1.86328 1.85156 7.29158 1.85156 13.8875C1.85156 13.9397 1.85156 13.9911 1.85233 14.0433C1.87235 16.2858 2.50445 18.4811 3.68142 20.3957L3.98626 20.8494L2.76688 25.3112L7.37008 24.1996Z"
                      fill="#00E676"
                    />
                    <path
                      d="M23.9534 4.08389C21.3584 1.4567 17.7985 -0.0171902 14.0916 0.000151315H14.0679C6.43383 0.000175006 0.151677 6.23388 0.151677 13.8091C0.151677 13.8447 0.152441 13.8795 0.152441 13.915C0.181196 16.3235 0.809534 18.6875 1.98154 20.7968L0 27.981L7.38496 26.0904C9.42506 27.2018 11.7186 27.7747 14.0459 27.7542C21.7082 27.7126 27.9896 21.4434 27.985 13.8394C28.0033 10.186 26.5515 6.67249 23.9534 4.08389ZM14.0916 25.4098C12.0287 25.4205 10.002 24.8713 8.23089 23.8217L7.77362 23.5949L3.37619 24.7292L4.51936 20.4187L4.21453 19.9649C3.08216 18.1506 2.48225 16.0589 2.48222 13.9248C2.48222 7.63141 7.70123 2.45265 14.0436 2.45265C20.3859 2.45265 25.6049 7.63141 25.6049 13.9248C25.6049 17.8875 23.5358 21.5795 20.1428 23.6705C18.3483 24.8111 16.2608 25.415 14.1297 25.4098M20.8287 17.0156L19.9904 16.6375C19.9904 16.6375 18.771 16.1081 18.0089 15.73C17.9327 15.73 17.8565 15.6544 17.7802 15.6544C17.5924 15.659 17.4087 15.711 17.2468 15.8056C17.0844 15.9001 17.1706 15.8812 16.1036 17.0912C16.0312 17.2326 15.8826 17.3211 15.7225 17.3181H15.6463C15.5317 17.299 15.4256 17.2464 15.3415 17.1668L14.9604 17.0156C14.1428 16.6721 13.3941 16.1854 12.7502 15.5787C12.5978 15.4275 12.3692 15.2762 12.2168 15.125C11.6526 14.5887 11.1653 13.978 10.7688 13.31L10.6925 13.1588C10.6263 13.0663 10.5749 12.9643 10.5401 12.8563C10.5202 12.7253 10.5471 12.5915 10.6163 12.4782C10.6857 12.3647 10.9212 12.1 11.1498 11.8731C11.3785 11.6463 11.3785 11.495 11.5309 11.3438C11.6092 11.2358 11.6633 11.1125 11.6896 10.982C11.7159 10.8516 11.7138 10.7171 11.6833 10.5875C11.3281 9.60899 10.9211 8.64975 10.4639 7.71383C10.3414 7.52472 10.1504 7.3894 9.93042 7.33571H9.09208C8.93966 7.33571 8.78724 7.41133 8.6348 7.41133L8.5586 7.48695C8.40618 7.56257 8.25376 7.71383 8.10132 7.78945C7.9489 7.86507 7.8727 8.09196 7.72028 8.2432C7.18749 8.91128 6.8927 9.73564 6.88194 10.5875C6.89038 11.1868 7.01996 11.7782 7.26298 12.3269L7.33921 12.5538C8.02353 14.0055 8.98057 15.3145 10.1591 16.4106L10.4639 16.7131C10.6857 16.8954 10.8899 17.0979 11.0736 17.3181C12.6527 18.6816 14.5283 19.6647 16.5532 20.1918C16.7819 20.2674 17.0867 20.2674 17.3154 20.343H18.0775C18.4758 20.3235 18.8654 20.2204 19.2207 20.0405C19.4074 19.9566 19.5857 19.8553 19.7541 19.738L19.9066 19.5868C20.059 19.4355 20.2114 19.3599 20.3638 19.2087C20.5128 19.077 20.6412 18.9241 20.7449 18.7549C20.8912 18.4161 20.9941 18.0607 21.0498 17.6962V17.1668C20.9813 17.1058 20.9043 17.0548 20.8211 17.0156"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_120_1946">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>+20 12889022985</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex min-[290px]:justify-start md:justify-around items-center gap-8 py-8 min-[290px]:flex-wrap md:flex-nowrap">
        <div className="left">
          <p>&copy; Dream Car. All rights reserved</p>
        </div>
        <div className="flex items-center justify-center gap-4 middle">
          <svg
            width={35}
            height={35}
            fill="none"
            stroke="#cdff49"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7Z" />
          </svg>
          <svg
            width={35}
            height={35}
            fill="none"
            stroke="#cdff49"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z" />
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M16.5 7.5v.001" />
          </svg>
          <svg
            width={35}
            height={35}
            fill="none"
            stroke="#cdff49"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 5H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" />
            <path d="m10 9 5 3-5 3V9Z" />
          </svg>
          <svg
            width={35}
            height={35}
            fill="none"
            stroke="#cdff49"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
            <path d="M8 11v5" />
            <path d="M8 8v.01" />
            <path d="M12 16v-5" />
            <path d="M16 16v-3a2 2 0 0 0-4 0" />
          </svg>
        </div>
        <div className="right">
          <p>Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
