import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  Pane,
  majorScale,
  minorScale,
  UnorderedList,
  ListItem,
} from "evergreen-ui";

import spaceTourismLogo from "../../assets/icons/logo.svg";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import closeIcon from "../../assets/icons/icon-close.svg";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

const NavContainer = styled(Pane)`
  width: 57%;
  // min-width: 400px;
  // width: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  // border: 1px solid green;
  position: relative;
  backdrop-filter: blur(14px);

  @media screen and (min-width: ${VIEWPORT_BREAKPOINTS.sm}px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 330px;
    // border: 1px solid blue;
  }

  @media screen and (min-width: ${VIEWPORT_BREAKPOINTS.md}px) {
    display: flex;
    alignitems: center;
    fontsize: 1em;
    padding-left: 5%;
    // padding-right: 150px;
    width: 550px;
    padding-left: 40px;
  }

  @media screen and (min-width: ${VIEWPORT_BREAKPOINTS.lg}px) {
    width: 730px;
  }
`;

const MobileNavContainer = styled.nav`
  display: block;
  padding-top: 30px;
  // transform: translateX(0);
  width: 300px;
  position: fixed;
  height: 100vh;
  bottom: 0;
  right: 0;
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(95px);
  border: 1px solid red;
  transition: transform 5s ease;
  transform: translateX(${({ navOpen }) => (navOpen ? "0" : "-100vw")});

  @media screen and (min-width: ${VIEWPORT_BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const PRIMARY_NAV_ITEMS = [
  {
    exact: true,
    id: "00",
    title: "HOME",
    path: "/",
  },
  {
    exact: true,
    id: "01",
    title: "DESTINATION",
    path: "/destination",
  },
  {
    exact: false,
    id: "02",
    title: "CREW",
    path: "/crew",
  },
  {
    exact: true,
    id: "03",
    title: "TECHNOLOGY",
    path: "/technology",
  },
];

const navLinkStyles = ({ isActive }) => {
  return {
    // fontWeight: isActive ? "bold" : "normal",
    // textDecoration: isActive ? "underline" : "none",
    // paddingY: "16px",
    fontSize: 15,
    // columnGap: 8,
    borderBottom: isActive ? "2px solid white" : "2px solid transparent",
    fontSize: "inherit",
    color: "var(--primary-light-color)",
    cursor: "pointer",
    letterSpacing: 1,
  };
};

// 979797

function Header() {
  const [navOpen, isNavOpen] = React.useState(false);

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });
  return (
    <Pane
      // maxWidth={1200}
      width={isTablet ? "95%" : "100%"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      // border="1px solid red"
      // marginTop={majorScale(2)}
      // paddingLeft={majorScale(5)}
      // margin={isTablet ? "unset" : "auto"}
      marginLeft={isTablet ? "auto" : "unset"}
      // paddingx={isTablet ? "unset" : 20}
      // paddingx={20}
      // marginRight={isTablet ? "unset" : "auto"}
    >
      <Pane>
        {" "}
        <img
          src={spaceTourismLogo}
          // src="../../assets/icons/logo.svg"
          alt="space tourism logo"
          // style={{ verticalAlign: "middle" }}
        />
      </Pane>

      {isTablet ? (
        <NavContainer
          is="nav"
          // marginLeft={majorScale(5)}
          // display="flex"
          // alignItems="center"
          // fontSize="1em"
          // paddingLeft={majorScale(7)}
          // paddingRight={majorScale(10)}
          // backgroundColor="rgba(255,255,255, 0.2)"
          // border="1px solid green"
          position="relative"
        >
          <Pane
            height="1px"
            width="50%"
            backgroundColor="#979797"
            position="absolute"
            left="-48%"
            top="50%"
          ></Pane>
          <UnorderedList
            display="flex"
            alignItems="center"
            // columnGap={majorScale(6)}
            columnGap={isLaptop ? majorScale(6) : majorScale(3)}
            // display={isTablet ? "unset" : "none"}
            border="1px solid blue"
          >
            {PRIMARY_NAV_ITEMS.map((navItem, i) => (
              // <ListItem
              //   key={i}
              //   fontSize="inherit"
              //   color="var(--primary-light-color)"
              //   // marginX={majorScale(3)}
              //   display="flex"
              //   columnGap={majorScale(1)}
              //   // paddingY={majorScale(2)}
              //   cursor="pointer"
              //   letterSpacing={1}
              //   fontSize={isLaptop ? 16 : 15}
              // >
              <NavLink
                key={i}
                // exact={navItem.exact}
                to={navItem.path}
                // activeStyle={{ borderBottom: "1px solid #fff" }}
                // style={{
                //   display: "flex",
                //   paddingY: "16px",
                //   fontSize: 15,
                //   columnGap: 8,
                //   borderBottom: "2px solid red",

                // }}
                style={navLinkStyles}
              >
                <Pane
                  paddingY={16}
                  display="flex"
                  //   display="flex"
                  columnGap={majorScale(1)}
                >
                  {isLaptop && (
                    <strong
                    // marginRight={majorScale(1)}
                    // fontWeight="bold"
                    // display="inline-block"
                    // color="red"
                    >
                      {navItem.id}
                    </strong>
                  )}

                  <Pane
                  // paddingY={majorScale(2)}
                  >
                    {navItem.title}
                  </Pane>
                </Pane>
              </NavLink>
              // </ListItem>
            ))}
          </UnorderedList>
        </NavContainer>
      ) : (
        <Pane cursor="pointer" onClick={() => isNavOpen(true)}>
          <img
            src={hamburger}
            // src="../../assets/icons/logo.svg"
            alt="hamburger"
            // style={{ verticalAlign: "middle" }}
          />
        </Pane>
      )}
      {navOpen && <MobileNav navOpen={navOpen} isNavOpen={isNavOpen} />}
    </Pane>
  );
}

export default Header;

export function MobileNav({ navOpen, isNavOpen }) {
  return (
    <MobileNavContainer navOpen={navOpen}>
      <Pane
        border="1px solid red"
        display=" flex"
        alignItems="flex-end"
        textAlign="right"
        paddingRight={20}
      >
        <img
          src={closeIcon}
          alt="close icon"
          onClick={() => isNavOpen(false)}
        />
      </Pane>
      <Pane marginTop={majorScale(6)}>
        <UnorderedList
        // display="flex"
        // alignItems="center"
        // columnGap={majorScale(6)}
        // columnGap={isLaptop ? majorScale(6) : majorScale(3)}
        // display={isTablet ? "unset" : "none"}
        //border="1px solid blue"
        >
          {PRIMARY_NAV_ITEMS.map((navItem, i) => (
            <ListItem
              key={i}
              fontSize="inherit"
              color="var(--primary-light-color)"
              // marginX={majorScale(3)}
              display="flex"
              columnGap={minorScale(3)}
              paddingY={majorScale(2)}
              paddingLeft={majorScale(4)}
              cursor="pointer"
              letterSpacing={1}
              border="1px solid red"
            >
              {/* <NavLink
                exact={navItem.exact}
                to={navItem.path}
                activeStyle={{ borderBottom: "1px solid #fff" }}
                style={{
                  display: "inline-block",
                  padding: "8px 0",
                  color: "#fff",
                  marginRight: "40px",
                }}
              > */}
              <strong
                marginRight={majorScale(1)}
                fontWeight="bold"
                display="inline-block"
                color="red"
              >
                {navItem.id}
              </strong>

              <Pane>{navItem.title}</Pane>
              {/* </NavLink> */}
            </ListItem>
          ))}
        </UnorderedList>
      </Pane>
    </MobileNavContainer>
  );
}
