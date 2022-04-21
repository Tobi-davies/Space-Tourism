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
import Header from "../../components/header/header";
import techImage from "../../assets/image/technology/image-launch-vehicle-portrait.jpg";
import techImageLandscape from "../../assets/image/technology/image-launch-vehicle-landscape.jpg";
import techPageBackground from "../../assets/image/technology/background-technology-desktop.jpg";
import mobileBackground from "../../assets/image/technology/background-technology-mobile.jpg";
import tabletBackground from "../../assets/image/technology/background-technology-tablet.jpg";
import { spaceData } from "../../data/data";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

const Technology = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  return (
    <Pane
      backgroundImage={`url(${
        isLaptop
          ? techPageBackground
          : isTablet
          ? tabletBackground
          : mobileBackground
      })`}
      minHeight="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      paddingTop={majorScale(3)}
    >
      <Header />

      <Pane
        maxWidth={1200}
        marginLeft="auto"
        width="100%"
        // border="1px solid red"
        marginTop={majorScale(5)}
        paddingLeft={isLaptop ? 50 : 0}
      >
        <Pane
          fontSize={isTablet ? 20 : 16}
          fontFamily="Barlow Condensed"
          color="var(--primary-default-color)"
          letterSpacing={2}
          // paddingLeft={majorScale(1)}
          marginBottom={isLaptop ? 0 : 30}
          paddingLeft={isLaptop ? majorScale(1) : isTablet ? majorScale(4) : 0}
          textAlign={isTablet ? "unset" : "center"}
        >
          <Text
            color="rgba(255,255,255, 0.5)"
            fontSize="inherit"
            marginRight={minorScale(2)}
            fontFamily="Barlow Condensed"
            letterSpacing={1}
            fontWeight="bold"
          >
            03
          </Text>{" "}
          SPACE LAUNCH 101
        </Pane>

        <Pane
          display="flex"
          flexDirection={isLaptop ? "row" : "column-reverse"}
          justifyContent="space-between"
        >
          <Pane
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="col-md-6 col-12"
            // border="1px solid white"
          >
            <Pane
              display="flex"
              columnGap={40}
              flexDirection={isLaptop ? "row" : "column"}
              alignItems={isLaptop ? "unset" : "center"}
            >
              <Pane
                display="flex"
                flexDirection={isLaptop ? "column" : "row"}
                rowGap={25}
                columnGap={isLaptop ? "unset" : 25}
                paddingY={isLaptop ? "unset" : 30}
              >
                {spaceData.technology.map((item, i) => {
                  return (
                    <Pane
                      paddingX={isTablet ? 22 : 17}
                      paddingY={isTablet ? 12 : 11}
                      fontSize={isTablet ? 25 : 16}
                      color={
                        i === currentSlide
                          ? "var(--secondary-default-color)"
                          : "#fff"
                      }
                      border="1px solid #fff"
                      borderRadius="50%"
                      cursor="pointer"
                      onClick={() => {
                        // setCrewData(spaceData.crew[i]);
                        setCurrentSlide(i);
                      }}
                      backgroundColor={i === currentSlide ? "#fff" : ""}
                      textAlign="center"
                    >
                      {i + 1}
                    </Pane>
                  );
                })}
              </Pane>
              <Pane
                // border="1px solid red"
                textAlign={isLaptop ? "unset" : "center"}
                marginBottom={isLaptop ? "unset" : 70}
              >
                <Text
                  color="var(--text-default-color)"
                  fontSize={isTablet ? 16 : 14}
                  fontFamily="Barlow Condensed"
                  letterSpacing={1}
                >
                  THE TERMINOLOGY...
                </Text>
                <Paragraph
                  fontFamily="Bellefair"
                  textTransform="uppercase"
                  color="#fff"
                  fontSize={isLaptop ? 47 : isTablet ? 40 : 24}
                  marginTop={isTablet ? 20 : 16}
                  marginBottom={isTablet ? 20 : 16}
                  lineHeight={1}
                >
                  {spaceData.technology[currentSlide].name}
                </Paragraph>
                <Paragraph
                  width={isLaptop ? "85%" : isTablet ? "80%" : "95%"}
                  margin={isLaptop ? "unset" : "auto"}
                  color="var(--text-default-color)"
                  fontSize={isTablet ? 18 : 16}
                  fontFamily="Barlow Condensed"
                  // width={isLaptop ? "unset" : "95%"}
                  // marginX={isLaptop ? "unset" : "auto"}
                >
                  {spaceData.technology[currentSlide].description}
                </Paragraph>
              </Pane>
            </Pane>
          </Pane>
          <Pane
          // className="col-6"
          >
            {isLaptop ? (
              <Pane
                textAlign="right"
                // paddingTop={majorScale(3)}
              >
                <img
                  src={spaceData.technology[currentSlide].images.portrait}
                  alt="technology"
                  // style={{ verticalAlign: "middle" }}
                  width="95%"
                />
              </Pane>
            ) : (
              <Pane width="100vw">
                <img
                  src={spaceData.technology[currentSlide].images.landscape}
                  alt="technology"
                  // style={{ verticalAlign: "middle" }}
                  width="100%"
                />
              </Pane>
            )}
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Technology;
