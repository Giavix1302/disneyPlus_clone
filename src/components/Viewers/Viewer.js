import styled from "styled-components";

function Viewer({ srcImg, alt, srcVideo }) {
    return (
        <Wrapper>
            <img src={srcImg} alt={alt} />
            <video
                autoPlay
                loop
                playsInline
            >
                <source src={srcVideo} type="video/mp4" />
            </video>
        </Wrapper>
    );
}

const Wrapper = styled.a`
    display: block;
    padding-top: 54%;
    position: relative;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 2;
    }

    video {
        width: 100%;
        position: absolute;
        top: 0; left: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
            z-index: 1;
        }
    }
`

export default Viewer;