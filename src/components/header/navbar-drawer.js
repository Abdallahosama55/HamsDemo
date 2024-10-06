/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from "theme-ui";
import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { rgba } from "polished";
import { DrawerContext } from "contexts/drawer/drawer-context";
import Drawer from "components/drawer";
// import Logo from 'components/logo';
import Logo from "../logoNav";
import img1 from "../../assets/images/speech-to-text.svg";
import img2 from "../../assets/images/text-to-speech.svg";
import img3 from "../../assets/images/AI-to-speech.svg";

import close from "assets/images/icons/close.png";
import { useTranslation } from "react-i18next";
import "../../i18n/config";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarDrawer = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useContext(DrawerContext);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = (i) => {
    setOpenMenu(openMenu === i ? null : i);
  };

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
  const menuItems = [
    {
      path: 'home',
      label: 'Home',
      subMenuStatus: "false", // explicitly set to false
    },
    {
      subMenuStatus: "true",
      path: 'whyhjz',
      label: 'Why hjz',
    },
    {
      path: 'HowUseIt',
      label: 'How it work',
      subMenuStatus: "true",
      subMenu: [
        { path: 'step1', label: 'How-work-Title-01' ,icon:img1 },
        { path: 'step2', label: 'How-work-Title-02' ,icon:img2 },
        { path: 'step3', label: 'How-work-Title-03',icon:img3 },
      ],
    },
    {
      path: 'FAQs',
      label: 'FAQs',
      subMenuStatus: "false", // explicitly set to false
    }
  ];
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
      {menuItems.map((item, i) => (
        <Box as="li" key={i} sx={{ position: 'relative' }}>
          <Link
            activeClass="active"
            to={item.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => item.subMenu && handleMenuToggle(i)} // Toggle submenu if present
          >
            {t(item.label)}
            {item.subMenu && (
              <span style={{ marginLeft: '8px' }}><MdKeyboardArrowDown /></span> // Dropdown icon
            )}
          </Link>

          {/* Conditionally render subMenu as dropdown */}
          {item.subMenu && openMenu === i && (
            <Box
              as="ul"
              sx={{
                top: '100%',
                left: 0,
           
                padding: '10px', 
              }}
            >
              {item.subMenu.map((subItem, subIndex) => (
                <Box as="div" key={subIndex}  >
                  <Link
                    activeClass="active"
                    to={subItem.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                     className ="flex items-center gap-2 text-sm p-2 hover:text-[#5253B9]"
                  >
                    <img src={subItem.icon} alt={t(subItem.label)} className=" w-[20px] h-[20px] "/>
                    {t(subItem.label)}
                  </Link>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
        <Button
          id="btn-en-ar"
          onClick={changeLanguage}
          value="en"

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
    background: "#5253B9 !important",
    
  },
};
