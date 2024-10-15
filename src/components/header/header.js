/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from "theme-ui";
import Sticky from "react-stickynode";
import { useState, useEffect, useCallback } from "react";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import Logo from "components/logoHeader";
import { NavLink } from "components/link";
import menuItems from "./header.data";
// import lock from 'assets/images/icons/lock.png';
import { useTranslation } from "react-i18next";
import "../../i18n/config";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Subitem from "../cards/Subitem";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 720);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    const mainMenu = document.getElementById("main-menu");
    if (mainMenu) {
      mainMenu.style.direction = "rtl";
    }
  }, []);

  const handleCloseMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenu: false }));
  }, []);

  const changeLanguage = useCallback(async (e) => {
    const newLang = e.target.value === "en" ? "ar" : "en";
    await i18n.changeLanguage(newLang);
    
    document.documentElement.setAttribute("lang", newLang);
    document.body.style.direction = newLang === "en" ? "ltr" : "rtl";
    
    const mainMenu = document.getElementById("main-menu");
    if (mainMenu) {
      mainMenu.style.direction = newLang === "en" ? "ltr" : "rtl";
    }

    e.target.value = newLang;
    e.target.innerHTML = newLang === "en" ? "English" : "Arabic";

    const elements = document.getElementsByClassName(newLang === "en" ? "ar" : "en");
    Array.from(elements).forEach(el => {
      el.classList.replace(newLang === "en" ? "ar" : "en", newLang);
    });

    const body = document.body;
    body.classList.toggle("en-font", newLang === "en");
    body.classList.toggle("ar-font", newLang === "ar");
  }, [i18n]);

  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={false} top={0} activeClass="is-sticky" innerZ={100}>
          <Box
            id="header-en"
            as="header"
            variant="layout.header"
            className={state.isMobileMenu ? "is-mobile-menu" : ""}
          >
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} isSticky={state.isSticky} />
                <Flex
                  id="main-menu"
                  as="nav"
                  sx={styles.navbar}
                  className={state.isMobileMenu ? "navbar active" : "navbar"}
                >
                  <Box
                    as="ul"
                    sx={styles.navList}
                    style={{ justifyContent: "space-evenly" }}
                    className={state.isMobileMenu ? "active" : ""}
                  >
                    {menuItems?.map(({ path, label }, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setHoveredItem(path)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <NavLink
                          path={path}
                          label={t(label)}
                          onClick={handleCloseMenu}
                          className="hover:text-[#3132A9]"
                        />
                        {path === "HowUseIt" && (
                          <DropdownIndicator isHovered={hoveredItem === path} />
                        )}
                      </li>
                    ))}
                  </Box>
                </Flex>
                <Flex sx={styles.buttonGroup}>
                  <Button
                    id="btn-languages"
                    onClick={changeLanguage}
                    value="en"
                    variant="text"
                    sx={styles.getStarted}
                  >
                    English
                  </Button>
                </Flex>
                {isMobile && <NavbarDrawer />}
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const DropdownIndicator = ({ isHovered }) => (
  <div className="transition-opacity duration-300 ease-in-out">
    {isHovered ? (
      <div className="flex items-center">
        <MdOutlineKeyboardArrowUp />
        <div className="hover-text opacity-100 transition-opacity duration-300 ease-in-out">
          <Subitem />
        </div>
      </div>
    ) : (
      <div className="flex items-center">
        <MdOutlineKeyboardArrowDown />
      </div>
    )}
  </div>
);

const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    header: {
      position: "fixed",
      left: 0,
      right: 0,
      py: [4],
      transition: "all 0.3s ease-in-out 0s",
      "&.is-mobile-menu": {
        backgroundColor: "white",
      },
    },
    ".is-sticky": {
      header: {
        backgroundColor: "white",
        py: ["13px"],
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
      },
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    flexGrow: 1,
    // justifyContent: 'center',
    li: {
      display: "flex",
      alignItems: "center",
      a: {
        cursor: "pointer",
        transition: "all 0.3s ease-in-out 0s",
      },
    },
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    flexGrow: 1,
   justifyContent:"center",
    px: 12,
    li: {
      position: "relative", // Make the li position relative to position the hover text
      "& .hover-text": {
        display: "none", // Hide by default
        position: "absolute",
        top: "6", // Position below the nav item
        left: "50%",
        transform: "translateX(-50%)",

        padding: "5px",
        borderRadius: "5px",
        // Additional styles
      },
      "&:hover .hover-text": {
        display: "block", // Show on hover
      },
    },
  },
  getStarted: {
    textDecoration: "underline !important",
    fontSize: "18px",
    textDecorationThickness: "3px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    p: ["0 16px"],
    minHeight: 45,
    ml: [6],
    display: ["none", null, null, null, "flex"],
  },
  login: {
    backgroundColor: "transparent",
    position: ["absolute", null, null, null, "static"],
    color: "text",
    fontSize: [2],
    fontWeight: 200,
    top: "50%",
    p: 0,
    transform: ["translateY(-50%)", null, null, null, "none"],
    right: 79,
    border: 0,
    fontFamily: "body",
    display: "flex",
    alignItems: "center",
    outline: 0,
    img: {
      maxWidth: 14,
      mr: 2,
    },
  },
  menuButton: {
    position: "relative",
    right: "-6px",
    p: 0,
  },
  closeButton: {
    height: "32px",
    padding: "0",
    minHeight: "auto",
    width: "32px",
    position: "relative",
    right: "-10px",
    path: {
      stroke: "text",
    },
  },
};
