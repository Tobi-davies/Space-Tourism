import styled from "@emotion/styled";
import "./home.styles.css";
import { useMediaQuery } from "react-responsive";
import {
  Pane,
  Button,
  Dialog,
  Paragraph,
  toaster,
  majorScale,
} from "evergreen-ui";

// import homeBackgroundImage from '../../assets/'
import homeBackgroundImage from "../../assets/image/home/background-home-desktop.jpg";
import homeTabletBg from "../../assets/image/home/background-home-tablet.jpg";
import Header from "../../components/header/header";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

const StyledOverlay = styled(Pane)`
  // display: none;
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;
  width: 100%;
  border: 1px solid blue;

  &:hover {
    // backgroundcolor: rgba(255, 255, 255, 0.3);
    // display: none;
  }
`;

const StyledBtn = styled.a`
  color: var(--secondary-default-color);
  background-color: var(--primary-light-color);
  text-transform: uppercase;
  height: 160px;
  width: 160px;
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Bellefair", serif;
  cursor: pointer;
  z-index: 1 !important;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;

  &:hover {
    color: var(--secondary-default-color);
    color: blue;
  }

  &:hover + .overlay {
    display: block;
    color: red;
  }
`;

function Home() {
  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  return (
    <Pane
      backgroundImage={
        isLaptop ? `url(${homeBackgroundImage})` : `url(${homeTabletBg})`
      }
      // height="100%"
      minHeight="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      paddingTop={majorScale(3)}
    >
      <Header />
      <Pane
        maxWidth={1200}
        width="100%"
        // paddingX={majorScale(10)}
        border="1px solid blue"
        margin="auto"
        display={isLaptop ? "grid" : "flex"}
        flexDirection={isLaptop ? "unset" : "column"}
        gridTemplateColumns={isLaptop ? "1fr 1fr" : "unset"}
        // gridTemplateRows={isLaptop ? "unset" : "1fr 1fr"}
        marginTop={majorScale(10)}
      >
        <Pane
          border="1px solid white"
          marginTop={isLaptop ? majorScale(16) : 0}
          marginBottom={majorScale(8)}
          paddingLeft={isLaptop ? majorScale(10) : 0}
          // textAlign={isLaptop ? "unset" : "center"}
          display={isLaptop ? "unset" : "flex"}
          justifyContent="center"
          alignItems="center"
        >
          <Pane
            fontFamily="Barlow Condensed"
            color="var(--text-default-color)"
            // paddingX={isLaptop ? "unset" : 20}
          >
            <Paragraph
              fontFamily="inherit"
              fontSize={isTablet ? 22 : 16}
              color="inherit"
              textAlign={isLaptop ? "unset" : "center"}
              marginBottom={isLaptop ? "unset" : 20}
            >
              SO, YOU WANT TO TRAVEL TO{" "}
            </Paragraph>
            <Pane
              color="var(--primary-light-color)"
              fontSize={isTablet ? 100 : 80}
              fontFamily="Bellefair"
              textAlign={isLaptop ? "unset" : "center"}
              marginBottom={isLaptop ? "unset" : 20}
            >
              SPACE
            </Pane>
            <Paragraph
              fontFamily="inherit"
              fontSize="16px"
              color="inherit"
              width={isLaptop ? 300 : isTablet ? 400 : "90%"}
              border="1px solid white"
              margin={isTablet ? "unset" : "auto"}
              textAlign={isLaptop ? "unset" : "center"}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </Paragraph>
          </Pane>
        </Pane>
        <Pane
          border="1px solid green"
          marginBottom={majorScale(8)}
          position="relative"
          display="flex"
          alignItems={isLaptop ? "flex-end" : "center"}
          justifyContent={isLaptop ? "flex-end" : "center"}
        >
          <Pane
            height={250}
            width={250}
            position={isLaptop ? "relative" : "unset"}
            // right={0}
            // bottom={-30}
            border="1px solid blue"
          >
            <StyledOverlay
              border="1px solid red"
              borderRadius="50%"
              // paddingY={80}
              // paddingX={50}
              // height={250}
              // width={250}
              // backgroundColor="rgba(255,255,255,0.3)"
              // backgroundColor="rgb(255,255,255)"
              // backgroundColor="#fff"
              // opacity={0.3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              // visibility="hidden"

              className="overlay"
              marginTop={isLaptop ? "unset" : 60}
            ></StyledOverlay>

            <StyledBtn className="explore">Explore</StyledBtn>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default Home;
