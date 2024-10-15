/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from "theme-ui";
import React, { useContext, useState, useCallback } from "react";
import { Link } from "react-scroll";
import { rgba } from "polished";
import { DrawerContext } from "contexts/drawer/drawer-context";
import Drawer from "components/drawer";
import Logo from "../logoNav";
import { useTranslation } from "react-i18next";
import "../../i18n/config";
import { MdKeyboardArrowDown } from "react-icons/md";
import closeIcon from "assets/images/icons/close.png";
import { menuItems } from "./menu-items"; // Move menu items to a separate file

const NavbarDrawer = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useContext(DrawerContext);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = useCallback((i) => {
    setOpenMenu((prev) => (prev === i ? null : i));
  }, []);

  const toggleHandler = useCallback(() => {
    dispatch({ type: "TOGGLE" });
  }, [dispatch]);

  const changeLanguage = useCallback((e) => {
    const newLang = e.target.value === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    
    document.body.style.direction = newLang === "en" ? "ltr" : "rtl";
    document.body.classList.toggle("en-font", newLang === "en");
    document.body.classList.toggle("ar-font", newLang === "ar");

    const elements = document.getElementsByClassName(newLang === "en" ? "ar" : "en");
    Array.from(elements).forEach(el => {
      el.classList.replace(newLang === "en" ? "ar" : "en", newLang);
    });

    e.target.value = newLang;
    e.target.innerHTML = newLang === "en" ? "Arabic" : "English";
  }, [i18n]);

  const renderSubMenu = (item, index, openMenu, t) => {
    if (!item.subMenu || openMenu !== index) return null;
    
    return (
      <Box as="ul" sx={styles.subMenu}>
        {item.subMenu.map((subItem, subIndex) => (
          <Box as="li" key={subIndex}>
            <Link
              activeClass="active"
              to={subItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 text-sm p-2 hover:text-[#5253B9]"
            >
              <img src={subItem.icon} alt={t(subItem.label)} className="w-[20px] h-[20px]" />
              {t(subItem.label)}
            </Link>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={<Box sx={styles.handler}><MenuButton /></Box>}
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={closeIcon} alt="close" />
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
                onClick={() => item.subMenu && handleMenuToggle(i)}
              >
                {t(item.label)}
                {item.subMenu && (
                  <span style={{ marginLeft: '8px' }}><MdKeyboardArrowDown /></span>
                )}
              </Link>
              {renderSubMenu(item, i, openMenu, t)}
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
  subMenu: {
    top: '100%',
    left: 0,
    padding: '10px',
  },
};
