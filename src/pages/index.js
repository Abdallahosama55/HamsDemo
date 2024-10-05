import React, { useEffect } from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import Questions from 'sections/questions.js';
// import AppFeature from 'sections/app-feature';
// import Dashboard from 'sections/dashboard';
// import Pricing from 'sections/pricing';
// import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import Problems from 'sections/Problems';
import HowItWorks from 'sections/HowItWorks';

export default function IndexPage() {
  useEffect(() => {
    const arsFont = document.getElementsByTagName("body");
    arsFont[0].classList.add("ar-font")
  }, []);
  return (

    <Layout >
      <SEO
        title="Hams.AI"
        description="حول النص للصوت, افضل ذكاء أصطناعي بالغة العربية, حول جميع مكلماتك لذكاء اصطناعي"
      />
     
      <Banner />
      <Support />
      <PremiumFeature />
     
      <Problems />
      <HowItWorks />
      <Questions />
      {/* <AppFeature /> */}
      {/* <Dashboard /> */}

      {/* <Pricing /> */}
      {/* <Testimonials /> */}
     
      
    </Layout>
  );
}
