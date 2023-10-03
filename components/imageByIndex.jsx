import feedback1 from "../public/feedback1.png";
import feedback2 from "../public/feedback2.webp";
import feedback3 from "../public/feedback3.webp";
import feedback4 from "../public/feedback1.png";
import feedback5 from "../public/feedback2.webp";
import feedback6 from "../public/feedback3.webp";

export const images = [
  feedback1,
  feedback2,
  feedback3,
  feedback4,
  feedback5,
  feedback6,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
