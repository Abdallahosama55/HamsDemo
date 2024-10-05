/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from "theme-ui";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { rgba } from "polished";
import { DrawerContext } from "contexts/drawer/drawer-context";
import Drawer from "components/drawer";
// import Logo from 'components/logo';
import Logo from "../logoNav";
import menuItems from "./header.data";
import close from "assets/images/icons/close.png";
import { useTranslation } from "react-i18next";
import "../../i18n/config";

const NavbarDrawer = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    if (e.target.value === "en") {
      e.target.value = "ar";
      e.target.innerHTML = "Arabic";
      document.body.style.direction = "ltr";
      //Get all the elements with en
      const ars = document.getElementsByClassName("ar");
      for (let i = 0; i < ars.length; i++) {
        let a = ars[i];
        a.classList.add("en");
        a.classList.remove("ar");
      }
      const arsFont = document.getElementsByTagName("body");
      arsFont[0].classList.add("en-font");
      arsFont[0].classList.remove("ar-font");
    } else {
      e.target.value = "en";
      e.target.innerHTML = "English";
      document.body.style.direction = "rtl";
      //Get all the elements with en
      const ens = document.getElementsByClassName("en");
      for (let i = 0; i < ens.length; i++) {
        let a = ens[i];
        a.classList.add("ar");
        a.classList.remove("en");
      }
      const arsFont = document.getElementsByTagName("body");
      arsFont[0].classList.add("ar-font");
      arsFont[0].classList.remove("en-font");
    }
  };

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          
          <MenuButton />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={close} alt="close" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <Logo sx={styles.logo} />
        <Box as="ul" sx={styles.navbar}>
          {menuItems.map(({ path, label }, i) => (
            <Box as="li" key={i}>
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t(label)}
              </Link>
            </Box>
          ))}
        </Box>
        <Button
          id="btn-en-ar"
          onClick={changeLanguage}
          value="en"
          variant="orange"
          sx={styles.donateNow}
        >
          English
        </Button>
      </Box>
    </Drawer>
  );
};
export default NavbarDrawer;

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  drawer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    outline: 0,
  },
  mask: {
    opacity: 0.2,
  },
  close: {
    position: "absolute",
    top: 35,
    right: 30,
    zIndex: "1",
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    p: 0,
  },
  wrapper: {
    height: "100%",
    paddingTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    ml: 30,
    mb: 45,
  },
  navbar: {
    listStyle: "none",
    mr: 5,
    p: 0,
    "li > a": {
      backgroundColor: "transparent",
      borderTop: (t) => `1px solid #000`,
      color: rgba("#02073E", 0.4),
      display: "flex",
      alignItems: "center",
      fontWeight: 500,
      minHeight: 44,
      marginLeft: 6,
      position: "relative",
      transition: "all 0.3s ease-in-out 0s",
    },
    "li:last-child > a": {
      borderBottom: (t) => `1px solid #000`,
    },
    ".active": {
      color: "primary",
    },
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: "auto 30px 40px",
    background: "#FE6A00",
  },
};
