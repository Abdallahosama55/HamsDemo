import React, { useEffect } from "react";
import { Container, Box, Text, Image } from "theme-ui";
import what01 from "../assets/images/what01.png";
import what02 from "../assets/images/what02.png";
import what03 from "../assets/images/what03.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
function WhatBenfit() {
  const { t } = useTranslation();
 // Function to split the text and return styled components
 useEffect(() => {
  AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
}, []);
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
      imgSrc: what01,
      titleKey: "What-work-Title-04",
      descriptionKey: "What-work-Description-04",
    },
    {
      imgSrc: what02,
      titleKey: "What-work-Title-05",
      descriptionKey: "What-work-Description-05",
    },
    {
      imgSrc: what03,
      titleKey: "What-work-Title-06",
      descriptionKey: "What-work-Description-06",
    },
  ];

 

  return (
    <Container>
      <Text as="h2" sx={styles.heading}>
        {renderStyledText(t('whatHams'))}
        <div className="w-full flex justify-center">
          <hr className="h-[5px] w-[25px] bg-[#5253B9]" />
        </div>
      </Text>
      <Box sx={styles.cardGrid}>
        {items.map((item, index) => (
          <Box key={index} sx={styles.card(index)} 
          data-aos={"zoom-in"}
          data-aos-duration="1200" // Custom duration for each card
          data-aos-delay={index * 200} // Delay the animation for each card
          
          >
            <Image src={item.imgSrc} alt={t(item.titleKey)}  className=" w-[50px]"/>
            <Text as="h3" className=" py-5 font-bold ">{t(item.titleKey)}</Text>
            <Text className="  font-light">{t(item.descriptionKey)}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default WhatBenfit;

const styles = {
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "40px"],
    textAlign: "center",
    mb: 8,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"],
    gap: "20px", // Adjust spacing between cards
    my:12,
  },
  card: (index) => ({
    
    border: "0.5px solid #ccc02",
    borderRadius: "16px",
    padding: "16px",
    py:8,

    boxShadow: 
      index === 0 ? "0px 4px 40px 1px #5253B94D" : // First card shadow
      index === 1 ? "10px 10px 30px 0px #00000012" : // Second card shadow
      "0px 4px 30px 0px #00000012", // Third card shadow
    background: index === 0 
      ? "linear-gradient(90deg, #3132A9 0.6%, #8485E6 99.52%)" // First card gradient
      : index === 1 
      ? "#FFFFFF" // Second card white
      : "linear-gradient(90deg, #3132A9 0.6%, #8485E6 99.52%)", // Third card gradient
    color: index === 0 
      ? "#FFFFFF" // First card gradient
      : index === 1 
      ? "#000" // Second card white
      : "#FFFFFF", // Third card gradient
  }),
};
