import React, { useEffect } from "react";
import chat from "../assets/images/soultion.png";
import { Container, Text } from "theme-ui";
import { useTranslation } from "react-i18next";
import spider from "../assets/images/spider2.svg";
import usecase from '../assets/images/spider3.png';
import AOS from "aos";
import "aos/dist/aos.css";

function UseCase() {
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
        <span style={{ color: "black" }}>{firstTwoWords} </span>
        <span
          style={{
            background: "linear-gradient(90deg, #3132A9 41.17%, #8485E6 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {remainingText}
        </span>
      </>
    );
  };

  return (
    <section className="py-6" id="HowUseIt">
      <Container>
        <Text as="h2" sx={styles.heading}>
          {renderStyledText(t("UseCaseTitle"))}
          <div className="w-full flex flex-col items-center justify-center">
            <hr className="h-[5px] w-[25px] bg-[#5253B9]" />
          </div>
        </Text>
        <img src={usecase} alt="usecase" className="lg:hidden" />
        <div className="justify-center pt-4 items-center lg:flex hidden">
          <div className="max-w-[770px] relative">
            <span
              className="absolute top-11 start-[-33%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={200}
            >
              {t('extra_conversational_engine')}
            </span>
            <span
              className="absolute top-11 end-[-20%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={250} // Adjust delay for each card if needed
            >
              {t('call_centers')}
            </span>
            <span
              className="absolute top-[24%] start-[-20%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={300}
            >
              {t('streaming')}
            </span>
            <span
              className="absolute top-[24%] end-[-25%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={350}
            >
              {t('virtual_meetings')}
            </span>
            <span
              className="absolute top-[73%] start-[-20%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={400}
            >
              {t('content_media')}
            </span>
            <span
              className="absolute top-[73%] end-[-29%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay={450}
            >
              {t('workplace_collaboration')}
            </span>
            <span
              className="absolute top-[89%] start-[-21%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={300}
            >
              {t('emotion_engine')}
            </span>
            <span
              className="absolute top-[89%] end-[-14%] lg:text-[18px] font-bold"
              style={gradientTextStyle}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={300}
            >
              {t('telephony')}
            </span>
            <div className="flex mt-12 justify-center items-center relative">
              <img src={spider} alt="spider" className="lg:w-full w-[350px]" />
              <div
                className="absolute rounded-full bg-[#FFFFFF] lg:h-[280px] lg:w-[280px] h-[120px] w-[120px] flex items-center justify-center font-bold text-[48px]"
                style={{
                  boxShadow: "0px 4px 50px 0px #00000012",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #3D3EC2 47.15%, #8485E6 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",

                  }}

                  data-aos="zoom-out"
                  data-aos-duration="700"
                  data-aos-delay={200}
                >
                  Hams.AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UseCase;

const styles = {
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "40px"],
    textAlign: "center",
  },
};

// Gradient text style
const gradientTextStyle = {
  background: "linear-gradient(90deg, #3132A9 0%, #8485E6 77.53%)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};
