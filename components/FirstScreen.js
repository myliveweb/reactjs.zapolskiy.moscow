import styled from 'styled-components';
import { keyframes } from 'styled-components'

export default function FirstScreen() {
  return (
    <>
      <VideoStyled loop muted name="media" autoPlay={true}>
          <source src="/video/6.mp4" type="video/mp4" />
      </VideoStyled>
      <Section id="home">
        <HomeOverlay />
        <StyledTel>
          Тел: <StyledTelB>+7 962 206-4142</StyledTelB>
        </StyledTel>
        <MainFace>
          <MyFace id="mi_face"></MyFace>
        </MainFace>
        <Intro>
          <Start>Сергей Запольский</Start>
          <StyledH1>Разработка сайтов</StyledH1>
          <Start>Решения будущего сегодня</Start>
        </Intro>
        <a href="#services">
          <ScrollDown>
            <ScrollDownSpan>
              <StyledI />
            </ScrollDownSpan>
          </ScrollDown>
        </a>
      </Section>
    </>
  )
}

const VideoStyled = styled.video`
    width: 100%;
    height: calc(100vw / 1.7777);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.1;
`;

const Section = styled.section`
    background-color: #222;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    -webkit-background-size: cover;
    -moz-background-size: cover;fon
    -o-background-size: cover;
    background-size: cover;
    padding: 0;
    color: #fff;
    height: 979px;
    background-position: 50% 0px;
    display: block;
    box-sizing: border-box;
`;

const HomeOverlay = styled.div`
    background-color: rgba(44, 62, 80, 0.3);
    background-image: url(/assets/images/pattern.png);
    background-repeat: repeat;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
`;

const StyledTel = styled.div`
    position: absolute;
    top: 30px;
    right: 60px;
    font-size: 3rem;
`;

const StyledTelB = styled.b`
    font-weight: 700;
`;

const MainFace = styled.div`
    margin: 0 auto;
    width: 250px;
    position: relative;
    top: 20%;
`;

const MyFace = styled.div`
    background: url(/assets/images/y.jpg);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    box-sizing: border-box;
`;

const Intro = styled.div`
    position: absolute;
    width: 100%;
    top: 60%;
    left: 0;
    text-align: center;
    -webkit-transform: translate(0%, -50%);
    -moz-transform: translate(0%, -50%);
    -ms-transform: translate(0%, -50%);
    -o-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
    padding: 0 15px;
`;

const Start = styled.div`
    font-family: Raleway400, 'Times New Roman', Times, sans-serif;
    font-size: 16px;
    font-style: normal;
    text-transform: none;
    margin: 15px 0;
`;

const StyledH1 = styled.h1`
    font: 700 40px/1.2 Raleway700, sans-serif;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 5px 0 5px;
    font-weight: 800;
`;

const ScrollDown = styled.div`
    position: absolute;
    left: 50%;
    bottom: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-left: -15px;
    display: block;
    z-index: 10;
    text-align: center;
`;

const drop = keyframes`
    0% {
      top: 0px;
      opacity: 0;
    }
    30% {
      top: 10px;
      opacity: 1;
    }
    100% {
      top: 25px;
      opacity: 0;
    }
`;

const ScrollDownSpan = styled.span`
    position: relative;
    color: #fff;
    -webkit-animation-name: ${drop};
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-name: ${drop};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: running;
`;

const StyledI = styled.i`
    display: inline-block;
    font: normal normal normal 26px/1 FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
    color: #fff;
    &:before {
      content: "\f107";
      box-sizing: border-box;
    }
`;