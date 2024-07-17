import styled from "styled-components";

import ImgSlider from "./ImgSlider/ImgSlider";
import Viewers from "./Viewers/Viewers";
import WrapperContent from "./Contents/WrapperContent";

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <WrapperContent />
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    margin-top: 70px;
    padding: 0 calc(3.5vw + 5px);

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
        background: url('./images/home-background.png') center center / cover no-repeat fixed;
    }
`

export default Home;