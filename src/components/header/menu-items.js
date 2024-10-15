import img1 from "../../assets/images/speech-to-text.svg";
import img2 from "../../assets/images/text-to-speech.svg";
import img3 from "../../assets/images/AI-to-speech.svg";

export const menuItems = [
  {
    path: 'home',
    label: 'Home',
    subMenuStatus: false,
  },
  {
    path: 'whyhjz',
    label: 'Why hjz',
    subMenuStatus: true,
  },
  {
    path: 'HowUseIt',
    label: 'How it work',
    subMenuStatus: true,
    subMenu: [
      { path: 'step1', label: 'How-work-Title-01', icon: img1 },
      { path: 'step2', label: 'How-work-Title-02', icon: img2 },
      { path: 'step3', label: 'How-work-Title-03', icon: img3 },
    ],
  },
  {
    path: 'FAQs',
    label: 'FAQs',
    subMenuStatus: false,
  }
];
