/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [

  {
    id: 2,
    icon: icon2,
    path: '',
    title: 'Mission ',
    description: `To assist individuals and businesses in maximizing the impact of their potential by providing personalized coaching and advisory services.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '',
    title: 'Vision',
    description: `Awaken The Giant in You`,
  },
  // {
  //   id: 5,
  //   icon: icon5,
  //   path: '',
  //   title: 'Consulting ',
  //   description: `Our approach to consulting is unique. Our network of professionals are trained to carefully identify clients' needs, analyze them deeply and work with you to arrive at the most appropriate solutions. Our scope of services ranges from business and management consulting, financial advisory and personal finance coaching.`,
  // },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        {/* <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="Our product offerings"
        /> */}
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
