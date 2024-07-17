import styled from "styled-components";

import Viewer from "./Viewer";

function Viewers() {
    return (
        <Container>
            <Viewer
                srcImg="./images/viewers/viewers-disney.png"
                alt="disney"
                srcVideo="./videos/1564674844-disney.mp4"
            />
            <Viewer
                srcImg="./images/viewers/viewers-marvel.png"
                alt="marvel"
                srcVideo="./videos/1564676115-marvel.mp4"
            />
            <Viewer
                srcImg="./images/viewers/viewers-national.png"
                alt="national"
                srcVideo="./videos/1564676296-national-geographic.mp4"
            />
            <Viewer
                srcImg="./images/viewers/viewers-pixar.png"
                alt="pixar"
                srcVideo="./videos/1564676714-pixar.mp4"
            />
            <Viewer
                srcImg="./images/viewers/viewers-starwars.png"
                alt="starwars"
                srcVideo="./videos/1608229455-star-wars.mp4"
            />
        </Container>
    );
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export default Viewers;