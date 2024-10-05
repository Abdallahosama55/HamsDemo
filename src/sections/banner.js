/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui";
import React, { useState, useEffect } from 'react';
import "../assets/styles/banner.scss";
import { useTranslation } from "react-i18next";
import LiveKitComponent from "./LiveKitComponent";
import SliderComponent from "./SliderComponent";
import AnimatedSVG from "../components/AnimatedSVG";
import { margin, rgba } from "polished";
import { TypeAnimation } from 'react-type-animation';
const AutoTypingText = ({ text, speed }) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <div>{typedText}</div>;
};
const Banner = () => {
  const { i18n, t } = useTranslation();
  const [languageChangeCount, setLanguageChangeCount] = useState(0);

  const subHeaderText = t("ONE-STOP-SHOP"); // Assuming you are using i18n for translations
const subHeaderTextEn ="dssddds"
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguageChangeCount(prevCount => prevCount + 1);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange); // Clean up the event listener
    };
  }, [i18n]);

  return (
    <section id="home" sx={styles.section}>
      <div className="lg:mx-32">
        
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-24 p-12 ">
          <Box sx={styles.bannerContent}>
          
            <div className="ar">
              <h1 id="main-title" style={{ lineHeight: "0.7" }} >
                <span
                  className="header-font"
                  style={{
                
                    color: "#000",
                    fontWeight:"800"
                   
                  }}
                >
              {i18n.language==="ar" ?    <TypeAnimation
                    sequence={[
                      subHeaderText, // Your animated text
                      1000, // Wait 1 second after displaying the text
                    ]}
                    style={{ fontSize: '0.45em', color: '#000',  lineHeight: "0.4", }} // Change font size and color here
                    repeat={0} // Play once
                    omitDeletionAnimation={true} // Do not delete the text
                  />: <span   style={{ fontSize: '0.6em', color: '#000',    lineHeight: "1", }} ><AutoTypingText text={subHeaderText} speed={80} /></span>  }
                </span>
              </h1>

              <p
                className="hjz-introduction"
                style={{
                  fontSize: "1em",
                  margin: "0",
                  paddingTop: "30px",
                  lineHeight: "1.5",
                }}
              >
                {t("Description-hjz")}
              </p>
            </div>
            <Text as="p"></Text>
          </Box>

          <Box>
            <LiveKitComponent />
          </Box>
        </div>
      </div>
      <AnimatedSVG />
      <div>
        <h3 className="title-know-more">{t("know-more-title")}</h3>
      </div>
      <SliderComponent />
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: "#FFF",
    
  },

  bannerContent: {
    margin: [null, null, null, "0 auto", 0],
    maxWidth: [null, null, null, 600, "none"],
    textAlign: [null, null, null, "center", "left"],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "textSecondary",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "textSecondary",
      maxWidth: [470],
      m: [null, null, null, "30px auto", 0],
      mt: [3, null, null, null, 5],
    },
  },
  subscriptionForm: {
    justifyContent: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    input: {
      outLine: "none",
      backgroundColor: "#FFFFFF",
      border: "0 none",
      borderColor: "#FFFFFF",
      borderRadius: "0",
      borderBottom: "2px solid rgba(0, 0, 51, 0.7)",
      fontFamily: "body",
      fontSize: [1, null, null, null, 2],
      px: [5],
      "::placeholder": {
        color: rgba("#02073E", 0.4),
        opacity: 1,
      },
      "::input:focus": {
        outLine: "none",
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    span: {
      fontSize: ["13px", null, null, null, 2],
      lineHeight: 2.62,
      color: rgba("#566272", 0.6),
    },
  },
  sponsor: {
    alignItems: "center",
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ["60px", null, null, null, "80px", "100%"],
      },
    },
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    maxWidth: "800px",
    mt: [0, null, null, null, 0],
  },
};
