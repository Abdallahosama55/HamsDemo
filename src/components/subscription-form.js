/** @jsx jsx */

import { jsx, Flex, Grid, Button } from 'theme-ui';
import '../assets/styles/banner.scss';
import { useTranslation } from 'react-i18next';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const { t } = useTranslation();

  return (
    <Flex sx={styles.form} {...props}>
      <Grid gap={4} columns={[1, null, 2]}>
        <Button
          className="btn-subscriptionForm"
          style={{ margin: "0px" }}
        >
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://r144tvjgepm.typeform.com/to/b0ftFWBi"
            // target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel ?? t('Subscribe')}
          </a>
        </Button>
      </Grid>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    button: {
      ml: [0],
      alignItems: 'center',
      backgroundColor: '#FE6A00',
      color: 'white',
    },
  },
};
