import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import styled from "styled-components";

import { database } from "../firebase";

function Detail() {

    const { id } = useParams()

    const [detailData, setDetailData] = useState({})

    const { backgroundImg, description, subTitle, title, titleImg } = detailData


    useEffect(() => {
        const movies = ref(database, 'movies/' + id);
        onValue(movies, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setDetailData(data)
            }
        });
    }, [id])

    return (
        <Container>
            <Background>
                <img src={backgroundImg} alt={title} />
            </Background>
            <ImgTitle>
                <img src={titleImg} alt={title} />
            </ImgTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/icons/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/icons/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <img src="/images/icons/group-icon.png" alt="" />
                    </GroupWatch>
                </Controls>
                <SubTitle>{subTitle}</SubTitle>
                <Description>{description}</Description>
            </ContentMeta>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
    position: fixed;
    left: 0;
    right: 0;top: 0;
    opacity: 0.8;
    z-index: -1;

    img {
        width: 100vw;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`

const ImgTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: flex-end;
    -webkit-box-pack: start;
    margin: 0 auto;
    width: 100%;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

const ContentMeta = styled.div`
    max-width: 874px;
`


const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;
`
const Player = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    font-size: 15px;
    border-radius: 4px;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background-color: rgb(249, 249, 249);
    border: none;
    color: #000;
    cursor: pointer;
    
    img {
        width: 32px;
        height: 32px;
    }

    &:hover {
        background-color: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0 22px;
        font-size: 12px;
        margin: 0 10px 0 0;

        img {
            width: 25px;
        }
    }
`

const Trailer = styled(Player)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249 , 249);
`

const AddList = styled.div`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(1px, 0) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid white;

    img {
        height: 40px;
        width: 40px;
        display: block;
    }
`

const SubTitle = styled.p`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Description = styled.p`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export default Detail;