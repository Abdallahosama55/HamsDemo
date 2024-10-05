/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
           {/* <Text as="span"><a href="/policyGuest" style={{color:"white"}}>الشروط و الاحكام  للعميل</a></Text> */}
            <Text as="span">
              &copy; Copyright by Hams.AI {new Date().getFullYear()}  
            </Text>
          </Flex>
    
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    background: " #3132A9", // Change to background
    pt: [6],
    pb: [6],
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  footerInner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ['column', null, null, null, 'row'],
  },
  copyright: {
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      color: rgba('#ffffff', 0.7),
      fontSize: 1,
      lineHeight: '18px',
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: 'none',
    // flexDirection: ['column', null, null, null, 'row'],
    m: ['25px 0 0', null, null, null, 0],
    p: 0,
    li: {
      '+ li': {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: [1, null, null, 2],
      },
    },
  },
};
