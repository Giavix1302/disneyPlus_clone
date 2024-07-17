import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='./images/cta-logo-one.svg' alt='' />
                    <SignUp>GET IT ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by 1$.
                    </Description>
                    <CTALogoTwo src='./images/cta-logo-two.png' alt='' />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    margin-bottom: 10vw;
    padding: 80px 40px;
    position: relative;
`

const BgImage = styled.div`
    height: 100%;
    background: url('./images/login-background.jpg') top / cover no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`

const CTALogoOne = styled.img`
    display: block;
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    margin-bottom: 12px;
`
const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
        cursor: pointer;
    }
`

const Description = styled.p`
    color: #f3f3f3;
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`

export default Login