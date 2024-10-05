/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import  '../assets/styles/banner.scss';
import { useTranslation } from 'react-i18next'
import {db} from "../utils/config"
import swal from "sweetalert"

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const {t} = useTranslation();

  const SendInformation = (e) => {
    e.preventDefault();
    const elementsArray = [...e.target.elements]
    elementsArray.pop()
    const formData = {}

    elementsArray.forEach(field => {
      if(field.value !== ""){
        formData[field.id] = field.value
      }

    })
    console.log(formData);

    if(elementsArray[0].value === "" || elementsArray[1].value === ""){
      // console.log("Please, all field is required ^_^")
      swal({
        title:t("request-title-invalid"),
        text:t("request-text-invalid"),
        icon:"error",
        button:t("request-button-invalid")
      });
    }else{
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      db.collection("companies").add({name:formData["company-name"],mobile:formData["company-mobile"],date:date})
        .then(() => {
          //done
        })
        .catch(err => console.log(err))
        swal({
          title:t("request-title-successful"),
          text:t("request-text-successful"),
          icon:"success",
          button:t("request-button-successful")
        });
    }

  }

  return (
    <Flex onSubmit={SendInformation} as="form" id="form" sx={styles.form} {...props} >
        {/* <Grid gap={4} columns={[1, null, 2]} >
            <Label htmlFor="company-name" variant="styles.srOnly">
              {t('Company-Name')}
            </Label>
            <Input 
              type="text"
              id="company-name"
              placeholder={t('Company-Name')}
              maxLength = {80}
              
            />
          
        
          <Label htmlFor="company-mobile" variant="styles.srOnly">
            {t('Mobile')}
          </Label>
          
          <Input
            type="tel"
            id="company-mobile"
            placeholder="ex: 0560000000"
            language="en"
            maxLength = {10}
          />
                    
        </Grid>
          <Button  id="btunn" style={{margin: "5px",background:"#FE6A00",color:"white", display:'block'}}>{buttonLabel ?? t('Subscribe')}</Button>
       */}
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [0],
      alignItem: 'center'
    },
    
  },
};
