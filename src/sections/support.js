/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import support01 from "assets/images/support01.avif";
import support02 from "assets/images/support02.avif";
import support03 from "assets/images/support03.avif";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Support = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second duration
  }, []);

  const data = [
    {
      id: 1,
      icon: support01,
      title: t("Feature-Title-01"),
      description: t("Feature-Description-01"),
      animate:"fade-left"
    },
    {
      id: 2,
      icon: support02,
      title: t("Feature-Title-02"),
      description: t("Feature-Description-02"),
       animate:"fade-up"
    },
    {
      id: 3,
      icon: support03,
      title: t("Feature-Title-03"),
      description: t("Feature-Description-03"),
       animate:"fade-right"
    },
  ];

  return (
    <div className="bg-white" id="whyhjz">
      <Container>
        <h1 className="flex flex-col items-center justify-center text-[48px] text-center font-bold">
          <div>
            {t("why")} <span className="text-[#5253B9]">{t("hams")}</span>{" "}
          </div>
          <hr className="h-[5px] w-[25px] bg-[#5253B9]" />
        </h1>

        <div className="grid lg:grid-cols-3 gap-12 py-12 lg:py-24 justify-center items-center">
          {data?.map((item, key) => (
            <div
              key={key}
              className="box h-full shadow-lg gap-6"
              data-aos={item.animate}
              data-aos-duration="1200" // Custom duration for each card
              data-aos-delay={key * 200} // Delay the animation for each card
            
            >
              <div className="flex p-6 flex-col gap-6">
                <img src={item.icon} alt={item.title} />
                <h2 className="font-bold text-[#5253B9]">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Support;
