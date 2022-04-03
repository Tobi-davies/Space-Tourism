import styled from "@emotion/styled";
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
import Header from "../../components/header/header";

const StyledBtn = styled.a`
  background-color: var(--primary-light-color);
  padding: 50px 30px;
  font-size: 24px;
  border-radius: 50%;
  // border: none;
  // outline: none;
  font-family: "Bellefair", serif;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 60%;
  color: var(--secondary-default-color);
  z-index: 1 !important;
  // border: solid 10px #fc5185;
  // clip-path: polygon(
  //   calc(0% + 5px) calc(0% + 5px),
  //   /* top left */ calc(100% - 5px) calc(0% + 5px),
  //   /* top right */ calc(100% - 5px) calc(100% - 5px),
  //   /* bottom right */ calc(0% + 5px) calc(100% - 5px) /* bottom left */
  // );
  // transition: clip-path 0.2s linear;

  &:hover {
    // border: 20px solid #979797;
    color: var(--secondary-default-color);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  // &::before {
  //   content: "ml';k";
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   height: 0px;
  //   width: 0px;
  //   z-index: -1;
  //   border-radius: 50%;
  //   background-color: var(--secondary-default-color);
  //   transition: 0.3s linear;
  // }

  // &:hover::before {
  //   height: 450px;
  //   width: 450px;
  // }
`;

function Home() {
  return (
    <Pane
      backgroundImage={`url(${homeBackgroundImage})`}
      // height="100%"
      height="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Header />
      <Pane
        maxWidth={1200}
        width="100%"
        paddingX={majorScale(10)}
        border="1px solid red"
        margin="auto"
        display="grid"
        gridTemplateColumns="1fr 1fr"
        marginTop={majorScale(10)}
      >
        <Pane
          border="1px solid white"
          marginTop={majorScale(16)}
          marginBottom={majorScale(8)}
        >
          <Pane fontFamily="Barlow Condensed">
            <Paragraph fontFamily="inherit" fontSize="28px">
              SO, YOU WANT TO TRAVEL TO{" "}
            </Paragraph>
            <Pane
              color="var(--primary-light-color)"
              fontSize="150px"
              fontFamily="Bellefair"
            >
              SPACE
            </Pane>
            <Paragraph fontFamily="inherit" fontSize="18px">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </Paragraph>
          </Pane>
        </Pane>
        <Pane
          border="1px solid blue"
          marginBottom={majorScale(8)}
          position="relative"
        >
          <StyledBtn>Explore</StyledBtn>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default Home;
