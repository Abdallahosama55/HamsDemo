/** @jsx jsx */
import { jsx, Container,Text } from 'theme-ui';

import { useTranslation } from 'react-i18next';
import '../assets/styles/banner.scss';
import AccordionList from '../components/accordion/AccordionList';

const PremiumFeature = () => {
  const { t } = useTranslation();
  
  // FAQ data to pass to AccordionList
  const data = [
    {
      title: t("FAQ-Title-01"),
      contents: <div>{t("FAQ-Description-01")}</div>,
    },
    {
      title: t("FAQ-Title-02"),
      contents: <div>{t("FAQ-Description-02")}</div>,
    },
    {
      title: t("FAQ-Title-03"),
      contents: <div>{t("FAQ-Description-03")}</div>,
    },
    {
      title: t("FAQ-Title-01"),
      contents: <div>{t("FAQ-Description-01")}</div>,
    },
    {
      title: t("FAQ-Title-02"),
      contents: <div>{t("FAQ-Description-02")}</div>,
    },
    {
      title: t("FAQ-Title-03"),
      contents: <div>{t("FAQ-Description-03")}</div>,
    },


  ];
  const data2 = [
    {
      title: t("FAQ-Title-01"),
      contents: <div>{t("FAQ-Description-01")}</div>,
    },
    {
      title: t("FAQ-Title-02"),
      contents: <div>{t("FAQ-Description-02")}</div>,
    },
    {
      title: t("FAQ-Title-03"),
      contents: <div>{t("FAQ-Description-03")}</div>,
    },
    {
      title: t("FAQ-Title-01"),
      contents: <div>{t("FAQ-Description-01")}</div>,
    },
    {
      title: t("FAQ-Title-02"),
      contents: <div>{t("FAQ-Description-02")}</div>,
    },
    {
      title: t("FAQ-Title-03"),
      contents: <div>{t("FAQ-Description-03")}</div>,
    },


  ];
      
  const title=t('FAQs')
  const firstWord = title.split(" ")[0]; // Split by space and take the first element
  const scandWord = title.split(" ") [1]
  return (
    <section id="FAQs" sx={styles.section}>
      <Container>
      <Text as="h2" sx={styles.heading}>
      <span className=' text-[#171717]'> {firstWord} </span>
      <span className=' text-transparent'>{scandWord} </span>
      <div className=' w-full flex justify-center '>  <hr className=" h-[5px] w-[25px] bg-[#5253B9] "/></div>

        </Text>
        {/* Insert AccordionList here */}


        <div className=' flex lg:flex-row flex-col lg:mt-12 gap-5'>
        <AccordionList sections={data} />
        <AccordionList sections={data2} />

        </div>
      
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
    color: "#119390",
    padding: '0px',
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
    color: "#0B0B0E",
  },
  heading: {
    fontWeight: 600,
    fontSize: ["30px", null, null, "50px"],
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(49,50,169,1) 0%, rgba(132,133,230,1) 100%)",
    WebkitBackgroundClip: "text",
  
  },
};
