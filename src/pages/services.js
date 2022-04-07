import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Talent Giant"
          description="We give our clients access into a world of
          opportunities to stay ahead of the game
          and gain a competitive edge in a dynamic
          business world."
        />
        {/* <Banner /> */}
 <div  style={{marginTop:100}}>
 <UltimateFeatures />
 </div>
      
   
      </Layout>
    </ThemeProvider>
  );
}