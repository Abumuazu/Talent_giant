import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/aboutusbanner';
import UltimateFeatures from 'sections/aboutusmission';
import CustomerSupport from 'sections/customer-support';
import Support from 'sections/whyus';
import Faq from 'sections/faq';
// import Pricing from 'sections/pricing';
// import Support from 'sections/support';
// import Clients from 'sections/clients';
// import Blog from 'sections/blog';
// import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="About us"
          description="We give our clients access into a world of opportunities to stay ahead of the game and gain a competitive edge in a dynamic business world."
        />
        <Banner />
        <UltimateFeatures />
        {/* <CustomerSupport /> */}
        <Support />
     <Faq />
     
     
        {/* <Clients /> */}
      </Layout>
    </ThemeProvider>
  );
}
