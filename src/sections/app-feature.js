/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Img from 'components/image';
import app from 'assets/images/app.png';
import emoji from 'assets/images/icons/emoji.png';
import check from 'assets/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: 'Medical and vision',
  },
  {
    id: 2,
    label: 'Life insurance',
  },
  {
    id: 3,
    label: '400(k) savings',
  },
  {
    id: 4,
    label: 'HSAs and FSAs',
  },
  {
    id: 5,
    label: 'Commuter benefits',
  },
  {
    id: 6,
    label: '529 college savings',
  },
];

const AppFeature = () => {
  const image = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "app.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Built in one app to make instant reply with in lowest minutes"
              description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Image src={check} alt="" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <LearnMore label="Explore more" path="#!" />
          </Box>
          <Box sx={styles.illustration}>
            <Img
              src={image.illustration.childImageSharp.fluid}
              alt="workHard"
            />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default AppFeature;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
  },

};
