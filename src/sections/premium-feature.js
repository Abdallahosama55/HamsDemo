import React, { useEffect } from 'react';
import chat from '../assets/images/soultion.png';
import { Text } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import { HowItWorks } from 'sections/HowItWorks';
import AccordionList from '../components/accordion/AccordionList';
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
function PremiumFeature() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);
  // Function to split the text and return styled components
  const renderStyledText = (text) => {
   const words = text.split(" ");
   const firstTwoWords = words.slice(0, 2).join(" ");
   const remainingText = words.slice(2).join(" ");
 
   return (
     <>
       <span style={{ color: 'black' }}>{firstTwoWords} </span>
       <span style={{
         background: "linear-gradient(90deg, #3132A9 41.17%, #8485E6 100%)",
         WebkitBackgroundClip: "text",
         color: "transparent"
       }}>
         {remainingText}
       </span>
     </>
   );
 };
const items = [
  {
    number: "01",
    title: <div>{t("Solutions-work-Title-04")}</div>,
    contents: <div>{t("Solutions-work-Description-04")}</div>,
  },
  {
    number: "02",
    title: <div>{t("Solutions-work-Title-05")}</div>,
    contents: <div>{t("Solutions-work-Description-05")}</div>,
  },
  {
    number: "03",
    title: <div>{t("Solutions-work-Title-06")}</div>,
    contents: <div>{t("Solutions-work-Description-06")}</div>,
  },
  {
    number: "04",
    title: <div>{t("Solutions-work-Title-07")}</div>,
    contents: <div>{t("Solutions-work-Description-07")}</div>,
  },
  {
    number: "05",
    title: <div>{t("Solutions-work-Title-08")}</div>,
    contents: <div>{t("Solutions-work-Description-08")}</div>,
  },
  {
    number: "06",
    title: <div>{t("Solutions-work-Title-09")}</div>,
    contents: <div>{t("Solutions-work-Description-09")}</div>,
  },
];


  return (
    <section className=' py-12' id='HowUseIt'>

<Text as="h2" sx={styles.heading}>
        {renderStyledText(t("How it work"))}
        <div className="w-full flex flex-col items-center justify-center">
          <hr className="h-[5px] w-[25px] bg-[#5253B9]" />
          <p className='   text-[16px]  py-5 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lsed do eiusmod tempor</p>
        </div>
      </Text>
      <div className='grid lg:grid-cols-6' 
      
      >
        <div className='lg:col-span-2 lg:mx-0 mx-12 my-14' 
             data-aos={"fade-left"}
             data-aos-duration="1200" // Custom duration for each card
             data-aos-delay={200} // Delay the animation for each car
        >
          <img
            src={chat}
            alt={"hams_solution"}
            className='rounded-e-2xl bg-black w-full'
            style={{ boxShadow: '7px 16px 30px 5px rgba(0, 0, 0, 0.25)' }} // Adjust the rgba value as necessary

          />
        </div>
        <div className=' lg:col-span-4 lg:mx-24 mx-8'       
            data-aos={"zoom-in"}
             data-aos-duration="1200" // Custom duration for each card
             data-aos-delay={200} // Delay the animation for each car 
             >

        <AccordionList sections={items} iconUp={<GoPlus />} iconDown={<LuMinus />} />

        </div>
      </div>
    </section>
  );
}

export default PremiumFeature;

const styles = {
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "40px"],
    textAlign: "center",

  },
}