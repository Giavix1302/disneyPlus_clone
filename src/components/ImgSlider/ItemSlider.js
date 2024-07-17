import styled from "styled-components";

function ItemSlider({ src, alt, href }) {
    return (
        <Wrapper>
            <a href={href}>
                <img src={src} alt={alt} />
            </a>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    a{
        display: block;
        padding: 4px;

        img {
            width: 100%;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 200ms;
        }
    }
`

export default ItemSlider;