/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Link from 'next/link';

const data = [
  {
    id: 1,
    title: `How do I sign up for a service?`,
    contents: (
      <div>
      Please send an email to info@talentgiant.ca or via our website using &quot;contact us&quot;
      </div>
    ),
  },
  {
    id: 2,
    title: `How do I get paired with a tutor who will address my key areas of need?`,
    contents: (
      <div>
       Before a tutor is assigned to a student, our Education Consultant will meet with the
student to assess the need for a tutor, document the specific areas of focus of the
student, and thereafter match the student to the most appropriate tutor from our
pool of seasoned and qualified tutors.
      </div>
    ),
  },
  {
    id: 3,
    title: `What’s the delivery mode for the tutoring/coaching sessions?`,
    contents: (
      <div>
       Our tutoring/coaching sessions are customized to each individual and are currently
held online. This is a great option for busy students and draws on the vast
experience of our worldwide network.
      </div>
    ),
  },
  {
    id: 4,
    title: `What subjects do you offer tutoring in?`,
    contents: (
      <div>
     We offer tutoring in a variety of topics as well as for certifications. Our most in-
demand are Business Analysis, CFA, Project Management, Financial Planning,
Test prep, and more.
      </div>
    ),
  },
  {
    id: 5,
    title: `What type and size companies do you work with?`,
    contents: (
      <div>
      We have experience working with companies in diverse industries (e.g. IT, Health,
Finance, Real estate, etc.) and our clients range from 2 – 200 employees and from
pre-launch start-ups to companies with $1 billion dollars in annual revenue.
      </div>
    ),
  },
  {
    id: 6,
    title: `What are your consulting rates?`,
    contents: (
      <div>
    We believe in providing value to each of our clients and are committed to
delivering results. We provide our clients with a cost estimate prior to starting work,
engage our clients to understand their specific business needs and then outline
our plan of action and the associated costs to implement those solutions.
      </div>
    ),
  },
  {
    id: 7,
    title: `What are your in-demand consulting services?`,
    contents: (
      <div>
Our in-demand consulting services includes Bookkeeping, Tax filing, Financial
Advisory, Career Coaching, Writing Business Plan, Personal Effectiveness, etc.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answered"
          title="Frequently asked question"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
<Link href="/contactus">
<Button variant="text">Still Question? Contact us</Button>
</Link>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
