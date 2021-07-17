import styled from 'styled-components';

export default function VideoStyled() {
  return (
    <StyledVideo loop muted name="media" autoPlay={true}>
        <source src="/video/6.mp4" type="video/mp4" />
    </StyledVideo>
  )
}

const StyledVideo = styled.video`
    width: 100%;
    height: calc(100vw / 1.7777);
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.1;
`;