import React, { useEffect } from "react";
import { Box, Container, Text } from "theme-ui";
import { useTranslation } from "react-i18next";
import {
  FaMoneyBillWave,
  FaClock,
  FaDatabase,
  FaCode,
  FaNetworkWired,
  FaPhoneSlash,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { border, borderRadius, padding } from "polished";

const Problems = () => {
  const { t, i18n } = useTranslation();
  const problems = [
    {
      key: "HighOperationalCosts",
      icon: <FaMoneyBillWave size={24} color="rgba(82, 83, 185, 1)" />,
    },
    {
      key: "TimeSavings",
      icon: <FaClock size={24} color="rgba(82, 83, 185, 1)" />,
    },
    {
      key: "InefficientDataUtilization",
      icon: <FaDatabase size={24} color="rgba(82, 83, 185, 1)" />,
    },
    {
      key: "LongDevelopmentTime",
      icon: <FaCode size={24} color="rgba(82, 83, 185, 1)" />,
    },
    {
      key: "LocalExecutionRequirement",
      icon: <FaNetworkWired size={24} color="rgba(82, 83, 185, 1)" />,
    },
    {
      key: "EconomicImpactOfMissedCalls",
      icon: <FaPhoneSlash size={24} color="rgba(82, 83, 185, 1)" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);

  const isRTL = i18n.language === "ar";

  return (
    <section
      id="problems"
      sx={{
        ...styles.section,
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <Container>
        <Text as="h2" sx={styles.heading}>
          {t("Problems.title")}
      <div className=' w-full flex justify-center '>  <hr className=" h-[5px] w-[25px] bg-[#5253B9] "/></div>

        </Text>

        <Text as="p" sx={styles.subHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Box sx={styles.problemWrapper}>
          {problems.map((problem, index) => (
            <Box
              key={index}
              sx={{
                ...styles.problemCard
              }}

              data-aos={"zoom-in"}
              data-aos-duration="500" // Custom duration for each card
              data-aos-delay={index * 100} // Delay the animation for each card
              
            >
              <Box sx={styles.iconWrapper}>{problem.icon}</Box>
              <Box
                sx={{
                  ...styles.textWrapper,
                  textAlign: isRTL ? "right" : "left",
                }}
              >
                <Text as="h3" sx={styles.title}>
                  {t(`Problems.${problem.key}.title`)}
                </Text>
                <Text as="p" sx={styles.description}>
                  {t(`Problems.${problem.key}.description`)}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Problems;

const styles = {
  section: {
    backgroundColor: "rgba(82, 83, 185, 0.04)",
    py: [5, null, null, 6],
    px: [3, null, null, 4],
    borderRadius: "24px",
  },
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "50px"],
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(49,50,169,1) 0%, rgba(132,133,230,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mb: 4,
    mt:4,
  },
  subHeading: {
    fontWeight: 500,
    fontSize: ["15px", null, null, "17px"],
    color: "rgba(154, 154, 154, 1)",
    mb: 6,
    textAlign: "center",
  },
  problemWrapper: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, "1fr 1fr", null, "repeat(3, 1fr)"],
    gridRowGap: [3, null, null, 4],
    gridColumnGap: [3, null, null, 8],
  },
  problemCard: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius:"6px",
    padding:"15px",
    
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "rgba(82, 83, 185, .2)",
    width: "35px",
    height: "35px",
    mb: 2
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: ["16px", null, "20px"],
    fontWeight: 600,
    color: "rgba(0, 0, 0, 1)",
    mb: 2,
  },
  description: {
    fontSize: "16px",
    color: "rgba(137, 137, 137, 1)",
    lineHeight: "34px",
    fontWeight: 400,
  },
};
