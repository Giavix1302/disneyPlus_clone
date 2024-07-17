import styled from "styled-components";

function Contents({ title, children, ...props }) {
    return (
        <Container>
            <h4>{title}</h4>
            <Wrapper>{children}</Wrapper>
        </Container>
    );
}

const Container = styled.div` 
    padding: 26px 0 20px;

`

const Wrapper = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

    }
`



export default Contents;