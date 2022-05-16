/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import SupportType from 'components/cards/support-type';
import Image from 'components/image';
import illustration from 'assets/images/whyus.png';
import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';

const data = [
  {
    id: 1,
    icon: icon2,
    title: 'We Deliver On-Demand, Real-Time Solutions Wherever You Are',
    text: `It will never matter when or where you need help — Talent Giant always remains within your reach. Harnessing on digital evolution today, we meet the needs of our clients, making each of our offerings readily available whenever it is needed. You can be sure that our response will be prompt, easy to access, time-saving and as convenient as can be. Wherever you are, our solutions would come right to you!`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'We Connect You With Excellent Professional Partners',
    text: `We are intentional about offering top-quality performance, and we do this by building a strong team consisting of professionals with specialized expertise in various fields. Our professionals have defined responsibilities that fit into Talent Giant’s mission and vision. Working together in this goal-oriented system and through collaborative efforts, we’re collectively focused on achieving clear, outstanding results for the good of our customers.`,
  },
  {
    id:3,
    icon: icon2,
    title: 'We Offer Premium Services Within Your Budget',
    text: `It is never a one-size-fits-all when it comes to customer service, and budgets play a huge part in this. Talent Giant takes on a customer-centric approach that prioritizes and adequately fulfils our customer’s needs, and we do this by creating unique offerings that match the financial capacity of each customer. Talent Giant delivers excellent customer service within a budget frame-work, while still getting full value for your money. `,
  },
  {
    id: 4,
    icon: icon2,
    title: 'We Provide Personalized Experiences',
    text: `Needs are unique and preferences differ! At Talent Giant, we fully recognize and embrace this. We pride ourselves with the unique methods through which we provide tailor-made solutions to our customers. We proffer individualized experiences that align with specific demands and are tailored to meet multiple touchpoints. These include Tutoring services that impact well-rounded knowledge, Freelancing opportunities that match your skill set, Consultation sessions that provide insight, and Coaching services that give guidance and clarity.`,
  },
];

const Support = () => {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <div sx={styles.grid}>
          <div sx={styles.content}>
            <div sx={styles.heading}>
              <Heading sx={styles.title}>
               Why Businesses Turn To Talent Giant
              </Heading>
              <Text as="p" sx={styles.summary}>
                {/* Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever. */}
              </Text>
            </div>
            {/* <SectionHeading
              sx={styles.heading}
              title="Do you need help? Our support team ready to help you"
              description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            /> */}
            {data.map((support) => (
              <SupportType key={support.id} data={support} />
            ))}
          </div>
          <Box as="figure" sx={styles.illustration} className="illustration">
            <Image src={illustration} alt="illustration" />
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Support;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 17],
    pb: [8, null, null, null, 10, 16],
  },

  grid: {
    gap: [5, null, null, 10, 4],
    mx: 'auto',
    maxWidth: 1193,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      null,
      '360px 1fr',
      '470px 1fr',
    ],
  },
  content: {
    display: [null, null, null, 'grid', 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', 'unset'],
  },
  heading: {
    gridColumn: [null, null, null, '1/3', 'unset'],
    maxWidth: [null, null, null, 420, 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    textAlign: ['center', null, null, 'left'],
    h2: {
      color: 'heading',
      fontFamily: 'headingAlt',
      fontSize: [4, null, 6, 8, null, null, 11],
      fontWeight: 500,
      lineHeight: [1.33, null, 1.4, 1.53],
      letterSpacing: ['-0.5px', null, null, '-1px'],
      textAlign: ['center', null, null, null, 'left'],
      span: {
        backgroundSize: 'cover',
        px: 2,
      },
      mb: 4,
    },
    p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      maxWidth: 470,
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'left'],
    },
  },
  illustration: {
    display: 'flex',
    alignItems: 'center',
  },
};
