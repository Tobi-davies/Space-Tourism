import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import {
  Pane,
  Paragraph,
  majorScale,
  UnorderedList,
  ListItem,
  Text,
  minorScale,
} from "evergreen-ui";
import destinationBackgroundImage from "../../assets/image/destination/background-destination-desktop.jpg";
import Header from "../../components/header/header";
import { spaceData } from "../../data/data";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

console.log(spaceData);
console.log(spaceData.destinations);

// const NavLink = styled(Pane)`
// border-bottom: 2px solid transparent;

// &:hover {
//   border-bottom: 2px solid #979797;
//   box-sizing: border-box;
// }

// &:active {
//   border-bottom: 2px solid var(--primary-light-color);
// }
// `;

const ListLink = styled(ListItem)`
  &:hover {
    border-bottom: 2px solid #979797;
    box-sizing: border-box;
  }
`;

const DESTINATION_NAV_ITEMS = [
  {
    id: 0,
    title: "MOON",
  },
  {
    id: 1,
    title: "MARS",
  },
  {
    id: 2,
    title: "EUROPA",
  },
  {
    id: 3,
    title: "TITAN",
  },
];

const Destination = () => {
  const [pageData, setPageData] = React.useState(spaceData.destinations[0]);

  // const [imageUrl, setImageUrl] = React.useState();
  console.log(pageData.images.png);
  console.log(pageData.id);

  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  return (
    <Pane
      backgroundImage={`url(${destinationBackgroundImage})`}
      minHeight="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      paddingTop={majorScale(3)}
    >
      <Header />

      <Pane
        // className="row"

        maxWidth={1100}
        margin="auto"
        width="100%"
        // border="1px solid red"
        marginTop={majorScale(5)}
      >
        <Pane
          fontSize={isTablet ? 20 : 16}
          fontFamily="Barlow Condensed"
          color="var(--primary-default-color)"
          letterSpacing={2}
          paddingLeft={isTablet ? majorScale(5) : 0}
          border="1px solid red"
          textAlign={isTablet ? "unset" : "center"}
        >
          <Text
            color="rgba(255,255,255, 0.5)"
            fontSize="inherit"
            marginRight={isTablet ? minorScale(2) : 0}
            fontFamily="Barlow Condensed"
            letterSpacing={1}
          >
            01
          </Text>{" "}
          PICK YOUR DESTINATION
        </Pane>

        <Pane
          display="flex"
          flexDirection={isLaptop ? "row" : "column"}
          // alignItems="center"
          marginTop={majorScale(4)}
          // marginBottom={majorScale(4)}
          paddingBottom={isLaptop ? "unset" : 50}
        >
          <Pane
            className="col-md-6 col-12"
            border="1px solid white"
            // width={isLaptop ? "unset" : "100%"}
          >
            {/* <Text
              color="rgba(255,255,255, 0.5)"
              fontSize={20}
              marginRight={minorScale(2)}
              fontFamily="Barlow Condensed"
              letterSpacing={1}
            >
              01
            </Text> */}
            <Pane
              // border="1px solid red"
              textAlign="center"
              paddingTop={majorScale(3)}
            >
              <img
                // src={pageData.images.webp}
                // src={`url(${pageData.images.png})`}
                // src="https://res.cloudinary.com/dgrebgb5n/image/upload/v1650038456/space-tourism/destination/image-moon_ofyxez.png"
                src={pageData.images.png}
                // src={backgroundImage}
                // src="../../assets/image/destination/image-moon.webp"
                alt="destination"
                // style={{ verticalAlign: "middle" }}
                width={isLaptop ? "70%" : "50%"}
              />
            </Pane>
          </Pane>
          <Pane
            className="col-md-6 col-12"
            border="1px solid blue"
            textAlign={isLaptop ? "unset" : "center"}
          >
            <Pane
              paddingX={isTablet ? majorScale(7) : 0}
              paddingTop={majorScale(2)}
              border="1px solid green"
            >
              <UnorderedList
                display="flex"
                alignItems="center"
                justifyContent={isLaptop ? "unset" : "center"}
                columnGap={isTablet ? majorScale(5) : majorScale(3)}
                marginBottom={majorScale(2)}
                border="1px solid red"
              >
                {DESTINATION_NAV_ITEMS.map((navItem, i) => (
                  <ListLink
                    key={i}
                    fontSize="inherit"
                    color="var(--primary-light-color)"
                    display="flex"
                    columnGap={majorScale(1)}
                    cursor="pointer"
                    onClick={() => setPageData(spaceData.destinations[i])}
                    letterSpacing={1}
                    borderBottom={
                      i === pageData.id ? "2px solid #fff" : "unset"
                    }
                  >
                    <Pane paddingY={minorScale(1)}>{navItem.title}</Pane>
                  </ListLink>
                ))}
              </UnorderedList>

              <Pane
                fontFamily="Bellefair"
                fontSize={isLaptop ? 90 : isTablet ? 70 : 56}
                textTransform="uppercase"
                color="var(--primary-light-color)"
              >
                {pageData.name}
              </Pane>

              <Paragraph
                color="var(--text-default-color)"
                fontSize={15}
                width={isTablet ? "unset" : "95%"}
                margin={isTablet ? "unset" : "auto"}
              >
                {pageData.description}
              </Paragraph>

              <Pane
                height={1}
                backgroundColor="#979797"
                marginTop={majorScale(4)}
              ></Pane>

              <Pane
                display="flex"
                flexDirection={isTablet ? "row" : "column"}
                alignItems={isTablet ? "unset" : "center"}
                rowGap={20}
                border="1px solid red"
                marginTop={majorScale(2)}
              >
                <Pane width="50%" display="flex" flexDirection="column">
                  <Text
                    fontFamily="Barlow Condensed"
                    color="var(--text-default-color)"
                  >
                    AVG. DISTANCE
                  </Text>
                  <Text
                    fontFamily="Bellefair"
                    marginTop={majorScale(1)}
                    fontSize={22}
                    textTransform="uppercase"
                    color="var(--primary-default-color)"
                  >
                    {" "}
                    {pageData.distance}
                  </Text>
                </Pane>
                <Pane width="50%" display="flex" flexDirection="column">
                  <Text
                    fontFamily="Barlow Condensed"
                    color="var(--text-default-color)"
                  >
                    EST. TRAVEL TIME
                  </Text>
                  <Text
                    fontFamily="Bellefair"
                    marginTop={majorScale(1)}
                    fontSize={22}
                    textTransform="uppercase"
                    color="var(--primary-default-color)"
                  >
                    {pageData.travel}
                  </Text>
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Destination;
