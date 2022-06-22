import link from "../../assets/images/icons/linkedin.png"
import twitter from "../../assets/images/icons/twitter.png"
import gmail from "../../assets/images/icons/gmail.png"
export const menuItems = [
  {
    id: 1,
    title: 'About us',
    items: [
   
      {
        path: 'aboutus',
        label: 'FAQs   ',
      },
  
    ],
  },
  {
    id: 2,
    title: 'Services',
    items: [
  
      {
        path: 'services',
        label: 'Tutoring',
      },
      {
        path: 'services',
        label: 'Coaching',
      },
      {
        path: 'services',
        label: 'Consulting',
      },
      {
        path: 'services',
        label: 'Freelancing',
      },
    ],
  },
  {
    id: 3,
    title: 'Contact Us',
    items: [
      {
        path: 'mailto:someone@yoursite.com?subject=Enquiries',
        // label: 'info@talentgiant.ca',
        icon: gmail
      },
      {
       
        path: 'https://www.linkedin.com/in/talent-giant',
        // label: 'Linkedin',
        icon: link,
       
      },
      {
        path: 'https://twitter.com/TalentGiant',
        // label: 'twitter',
        icon: twitter
      },
     
    ],
  },
  // {
  //   id: 5,
  //   title: 'Policy',
  //   items: [
  //     {
  //       path: '#!',
  //       label: 'Application security',
  //     },
  //     {
  //       path: '#!',
  //       label: 'Software principles',
  //     },
  //     {
  //       path: '#!',
  //       label: 'Unwanted software policy',
  //     },
  //     {
  //       path: '#!',
  //       label: 'Responsible supply chain',
  //     },
  //   ],
  // },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
