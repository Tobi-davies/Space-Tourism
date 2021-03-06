import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Pane, Paragraph, majorScale, Text, minorScale } from "evergreen-ui";
import Header from "../../components/header/header";
import crewBackgroundImage from "../../assets/image/crew/background-crew-desktop.jpg";
import mobileBackgroundImage from "../../assets/image/crew/background-crew-mobile.jpg";
import tabletBackgroundImage from "../../assets/image/crew/background-crew-tablet.jpg";
import { spaceData } from "../../data/data";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

const Bullet = styled(Pane)`
  // background-color: rgba(255, 255, 255, 0.17);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Crew = () => {
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.lg}px)`,
  });
  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(autoPlay, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const autoPlay = () => {
    setCurrentSlide((prev) => {
      if (prev < spaceData.crew.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <Pane
      backgroundImage={`url(${
        isLaptop
          ? crewBackgroundImage
          : isTablet
          ? tabletBackgroundImage
          : mobileBackgroundImage
      })`}
      minHeight="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      paddingTop={majorScale(3)}
    >
      <Header />

      <Pane
        // className="row"

        // maxWidth={1100}
        // paddingX={majorScale(8)}
        margin="auto"
        width="100%"
        // border="1px solid red"
        marginTop={isTablet ? majorScale(5) : majorScale(4)}
      >
        <Pane
          fontSize={isTablet ? 20 : 16}
          fontFamily="Barlow Condensed"
          color="var(--primary-default-color)"
          letterSpacing={2}
          paddingLeft={isLaptop ? majorScale(1) : isTablet ? majorScale(4) : 0}
          marginBottom={isLaptop ? 0 : 20}
          textAlign={isTablet ? "unset" : "center"}
          maxWidth={1230}
          paddingX={
            isLargeScreen
              ? majorScale(9)
              : isLaptop
              ? majorScale(6)
              : majorScale(4)
          }
          marginX="auto"
          // border="1px solid blue"
        >
          <Text
            color="rgba(255,255,255, 0.5)"
            fontSize="inherit"
            marginRight={minorScale(2)}
            fontFamily="Barlow Condensed"
            letterSpacing={1}
            fontWeight="bold"
          >
            01
          </Text>{" "}
          MEET YOUR CREW
        </Pane>

        <Pane
          display="flex"
          flexDirection={
            isLaptop ? "row" : isTablet ? "column" : "column-reverse"
          }
          justifyContent="space-between"
          // marginTop={majorScale(4)}
          maxWidth={1230}
          marginX="auto"
          paddingX={
            isLargeScreen ? majorScale(8) : isLaptop ? majorScale(4) : "unset"
          }
          // border="1px solid green"
          minHeight="75vh"
        >
          <Pane
            className="col-md-6 col-12"
            // paddingTop={majorScale(6)}
            display="flex"
            flexDirection={
              isLaptop ? "unset" : isTablet ? "column" : "column-reverse"
            }
            justifyContent="center"
            alignItems="center"
            // border="1px solid green"
            position="relative"
            marginBottom={isLaptop ? "unset" : 50}
          >
            {/* <Text>{crewData.role}</Text> */}

            <Pane
              // border="1px solid red"
              textAlign={isLaptop ? "unset" : "center"}
            >
              <Text
                fontFamily="Bellefair"
                fontSize={isLaptop ? 25 : isTablet ? 21 : 16}
                textTransform="uppercase"
                color="#979797"
                lineHeight={1.5}
              >
                {spaceData.crew[currentSlide].role}
                {/* {crewData.role} */}
              </Text>
              <br />
              <Paragraph
                fontFamily="Bellefair"
                fontSize={isLaptop ? 46 : isTablet ? 40 : 25}
                textTransform="uppercase"
                color="#fff"
                marginTop={isLaptop ? majorScale(2) : majorScale(1)}
                lineHeight={1}
              >
                {spaceData.crew[currentSlide].name}
                {/* {crewData.name} */}
              </Paragraph>

              <Paragraph
                fontFamily="Barlow Condensed"
                fontSize={isLaptop ? 18 : 16}
                color="var(--text-default-color)"
                marginTop={isLaptop ? majorScale(3) : majorScale(2)}
                width={isLaptop ? "68%" : isTablet ? "80%" : "95%"}
                marginX={isLaptop ? "unset" : "auto"}
                // border="1px solid red"
              >
                {spaceData.crew[currentSlide].bio}
                {/* {crewData.bio} */}
              </Paragraph>
            </Pane>

            <Pane
              display="flex"
              columnGap={10}
              position={isLaptop ? "absolute" : "unset"}
              bottom="7%"
              left={16}
              marginTop={isLaptop ? 0 : isTablet ? 40 : 32}
              marginBottom={isTablet ? "unset" : 32}
            >
              {spaceData.crew.map((item, i) => {
                return (
                  <Bullet
                    key={i}
                    onClick={() => {
                      // setCrewData(spaceData.crew[i]);
                      setCurrentSlide(i);
                    }}
                    height={10}
                    width={10}
                    borderRadius="50%"
                    // backgroundColor="#fff"
                    backgroundColor={
                      i === currentSlide ? "#fff" : "rgba(255, 255, 255, 0.17)"
                    }
                    cursor="pointer"
                  />
                );
              })}
            </Pane>
          </Pane>
          <Pane
            className="col-md-6 col-12"
            display="flex"
            alignItems="flex-end"
            justifyContent={isLaptop ? "unset" : "center"}
            // border="1px solid red"
          >
            <Pane
              // border="1px solid blue"
              borderBottom={isTablet ? "unset" : "1px solid #383B4B"}
              textAlign="center"
              paddingTop={majorScale(3)}

              // marginTop="60px"
            >
              <img
                // src={crewImage}
                src={spaceData.crew[currentSlide].images.png}
                alt="crew member"
                // style={{ verticalAlign: "middle" }}
                width={isTablet ? "74%" : "85%"}
                // style={{ border: "1px solid green" }}
              />
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Crew;
