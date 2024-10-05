import React, { useEffect } from "react";
import { Box, Container, Text, Image } from "theme-ui";
import { useTranslation } from "react-i18next";
import img1 from "../assets/images/tell.png"; // Image for step
import img2 from "../assets/images/pick.png"; // Image for step
import img3 from "../assets/images/tech.png"; // Image for step
import img4 from "../assets/images/easly.png"; // Image for step
import AOS from "aos";
import "aos/dist/aos.css";
import { backgrounds, padding } from "polished";
const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);

  // Retrieve steps dynamically from the JSON file using t()
  const steps = t("HowItWorks.steps", { returnObjects: true });
  const title = t("HowItWorks.title");
  const firstWord = title.split(" ")[0]; // Split by space and take the first element
  const scandWord = title.split(" ")[1];
  // External images array corresponding to each step
  const images = [img1, img2, img3, img4];
  return (
    <section id="how-it-works" sx={styles.section}>
      <Container>
        <Text as="h2" sx={styles.heading}>
          <span className=" text-[#171717]"> {firstWord} </span>
          <span className=" text-transparent">{scandWord} </span>
          <div className=" w-full flex justify-center ">
            {" "}
            <hr className=" h-[5px] w-[25px] bg-[#5253B9] " />
          </div>
        </Text>

        <Box sx={styles.stepsWrapper}>
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={styles.stepCard}
              data-aos={"fade-up"}
              data-aos-duration="1200" // Custom duration for each card
              data-aos-delay={index * 200} // Delay the animation for each card
            >
              <Image src={images[index]} alt="" sx={styles.stepImage} />
              <Text
                as="span"
                sx={{
                  ...styles.stepNumber,
                  "&::before": {
                    ...styles.stepNumber["&::before"],
                    left: isRTL ? "unset" : "0", // Switch to 'right' for RTL
                    right: isRTL ? "0" : "unset",
                  },
                  "&::after": {
                    ...styles.stepNumber["&::after"],
                    left: isRTL ? "unset" : "46px", // Switch to 'right' for RTL
                    right: isRTL ? "46px" : "unset",
                  },
                }}
              >
                {step.number}
              </Text>
              <Text as="h3" sx={styles.stepTitle}>
                {step.title}
              </Text>
              <Text as="p" sx={styles.stepDescription}>
                {step.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default HowItWorks;

const styles = {
  section: {
    py: [5, null, null, 6],
    px: [3, null, null, 4],
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    my: "90px",
  },
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "50px"],
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(49,50,169,1) 0%, rgba(132,133,230,1) 100%)",
    WebkitBackgroundClip: "text",

    my: "90px",
  },
  stepsWrapper: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, "1fr 1fr", null, "repeat(4, 1fr)"],
    gap: [4, 4, 7],
  },
  stepCard: {
    backgroundColor: "#fff",

    // borderRadius: '12px',
    // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    // textAlign: 'left',
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",

    },
  },
  stepImage: {
    backgroundColor: "#100F14",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "229px",
    mb: 4,
   
    display: "block",
    mx: "auto",
  },
  stepNumber: {
    width: "95%",
    fontSize: "32px",
    fontWeight: 700,
    color: "#000",
    position: "relative",
    display: "inline-block",
    mb: 4,
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "4px",
      width: "20px",
      height: "2px",
      backgroundColor: "#4d4dff",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "23px",
      width: "100%",
      height: "1px",
      backgroundColor: "#ddd",
    },
  },
  stepTitle: {
    fontSize: ["16px", null, "20px"],
    fontWeight: 600,
    color: "rgba(0, 0, 0, 1)",
    mb: 2,
  },
  stepDescription: {
    fontSize: "16px",
    color: "rgba(137, 137, 137, 1)",
    lineHeight: "34px",
    fontWeight: 400,
  },
};
