// import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { Pane, majorScale, UnorderedList, ListItem } from "evergreen-ui";

import spaceTourismLogo from "../../assets/icons/logo.svg";

const NavContainer = styled(Pane)`
  display: flex;
  alignitems: center;
  fontsize: 1em;
  padding-left: 70px;
  padding-right: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid green;
  position: relative;
  backdrop-filter: blur(14px);
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
    path: "/search-events",
  },
  {
    exact: false,
    id: "02",
    title: "CREW",
    path: "/host/create-event/basics",
  },
  {
    exact: true,
    id: "03",
    title: "TECHNOLOGY",
    path: "/help-center",
  },
];

function Header() {
  return (
    <Pane
      // maxWidth={1200}
      width="95%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid red"
      // marginTop={majorScale(2)}
      // paddingLeft={majorScale(5)}
      marginLeft="auto"
    >
      <Pane>
        {" "}
        <img
          src={spaceTourismLogo}
          alt="Ticketsir logo"
          // style={{ verticalAlign: "middle" }}
        />
      </Pane>

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
          width="40%"
          backgroundColor="#979797"
          position="absolute"
          left="-38%"
          top="50%"
        ></Pane>
        <UnorderedList
          display="flex"
          alignItems="center"
          columnGap={majorScale(5)}
        >
          {PRIMARY_NAV_ITEMS.map((navItem, i) => (
            <ListItem
              key={i}
              fontSize="inherit"
              color="var(--primary-light-color)"
              // marginX={majorScale(3)}
              display="flex"
              columnGap={majorScale(1)}
              paddingY={majorScale(2)}
              cursor="pointer"
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
      </NavContainer>
    </Pane>
  );
}

export default Header;
