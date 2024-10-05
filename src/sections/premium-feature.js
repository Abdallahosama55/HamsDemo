/** @jsx jsx */
import { jsx, Box, Container, Grid, Flex } from "theme-ui";
import SectionHeading from "components/section-heading";
import how01 from "../assets/images/speech-to-text.svg";
import how02 from "../assets/images/text-to-speech.svg";
import how03 from "../assets/images/AI-to-speech.svg";
import imgsrc from "../assets/images/chat.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const steps = [
  {
    imgSrc: how01,
    titleKey: "How-work-Title-01",
    descriptionKey: "How-work-Description-01",
  },
  {
    imgSrc: how02,
    titleKey: "How-work-Title-02",
    descriptionKey: "How-work-Description-02",
  },
  {
    imgSrc: how03,
    titleKey: "How-work-Title-03",
    descriptionKey: "How-work-Description-03",
  },
];

const PremiumFeature = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);
  return (
    <section id="HowUseIt" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box className="w-full h-full "
             data-aos={"zoom-out"}
             data-aos-duration="1200" // Custom duration for each card
             data-aos-delay={200} // Delay the animation for each card
          >
            <img
              className=""
              src={imgsrc} // You can change this to the appropriate step if needed
              alt={"How-it-works"} // Using translation for alt text
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
           
            />
          </Box>

          <Box sx={styles.rightContent}>
            <div>
              {steps.map((step, index) => (
                <Flex
                  key={index}
                  id="icon"
                  sx={styles.step}
                  data-aos={"fade-up"}
                  data-aos-duration="1200" // Custom duration for each card
                  data-aos-delay={index * 200} // Delay the animation for each card
                >
                  <img
                    sx={styles.icon}
                    src={step.imgSrc}
                    alt={t(step.titleKey)}
                  />
                  <Flex>
                    <Box sx={styles.descriptionBox}>
                      <h4
                        style={{ marginBottom: 0, color: "#18D678" }}
                        className="sub-header-how"
                      >
                        {t(step.titleKey)}
                      </h4>
                      <p style={{ color: "#FFF", marginTop: 0 }}>
                        {t(step.descriptionKey)}
                      </p>
                    </Box>
                  </Flex>
                </Flex>
              ))}
            </div>
          </Box>
        </Grid>
      </Container>
      <Box
        sx={styles.HamsFeature}
        className="text-center py-6  mx-6 lg:px-48 px-8 lg:text-[28px] text-[18px] text-[#6666ce] font-bold mt-56 rounded-t-xl lg:leading-[60px] bg-white"
      >
        <h4>{t("word-box")}</h4>
        <button className="text-white text-sm hover:bg-[#ffffff] hover:text-[#6666ce] border border-[#6666ce] bg-[#6666ce] shadow-lg px-12 py-3 my-12 rounded-2xl">
          {t("Signup")}
        </button>
      </Box>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  normalBox: {
    h4: {
      width: "100%",
      textAlign: "start",
      height: "100%",
      background: "#FAFAFA",
      border: "5px solid #18D678",
      padding: "15px 0",
      fontSize: "1.8em",
    },
  },
  step: {
    alignItems: "start",
    gap: "2",
    width: "100%",

    flexDirection: "row", // Stack the image and text vertically
    mb: 4, // Add margin-bottom for spacing between steps
    textAlign: "start", // Center text below each image
  },
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
    background: "linear-gradient(to bottom, #3132A9, #8485E6)", // Change to background
  },
  HamsFeature: {

    background: "linear-gradient(to bottom, #F3F3FF, #FFFFFF)", // Change to background
  },

  icon: {
    width: "60px", // Set a fixed width for consistent image size
    height: "60px", // Set a fixed height for symmetric images
    mb: 3, // Add margin-bottom to separate the image from the text
    objectFit: "contain", // Ensure images fit within the defined size without distortion
  },
  descriptionBox: {
    maxWidth: "220px", // Limit the width of the description text
    textAlign: "start", // Ensure text is centered under the image
  },
  grid: {
    alignItems: "center",
    justifyItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
  heading: {
    textAlign: ["left", null, null, "center", "left"],
    ml: [null, null, null, "auto"],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontWeight: "bold",
      color: "#18D678",
      fontSize: "3em",
      margin: "0px",
    },
    p: {
      margin: "0px",
      color: "#FFF",
      fontSize: "2em",
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
    position: "relative",
    zIndex: -1,
  },
  rightContent: {},
};
