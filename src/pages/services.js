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
import Hero from '../components/NewHero/servicesHero';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Our Services "
          description="Our goal is to ensure a sense of satisfaction and an overall fulfilling experience with Talent Giant"
        />
        {/* <Banner /> */}
 <div  style={{marginTop:100}}>
  <Hero/>
 <UltimateFeatures />
 </div>
      
   
      </Layout>
    </ThemeProvider>
  );
}
