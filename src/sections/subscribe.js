/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import SubscriptionForm from 'components/subscription-form02';
import { useTranslation } from 'react-i18next'

const Subscribe = () => {

  return (
    <Box as="section" sx={styles.section}>
     
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    backgroundColor: '#0B0B0E',
    pt: [9, null, null, null, 10, 13, null],
    // pb: [9, null, null, null, 11, 14, null],
    // display: 'flex',
    // justifyContent: 'center',
  },
  subSection : {
    // display: 'flex',
    // justifyContent: 'center',
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h2: {
      color: 'white',
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#FFFFFF',
      fontSize: [2, null, null, 3],
      m: ['15px auto 0', null, null, '10px auto 0'],
    },
  },
  subscriptionForm: {
    m: ['30px auto 0'],
    maxWidth: [555],
    flexDirection: ['column', null, null, 'row'],
    input: {
      backgroundColor: rgba('white', 0.08),
      border: '0 none',
      color: rgba('white', 0.8),
      fontFamily: 'body',
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('white', 0.8),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
};
