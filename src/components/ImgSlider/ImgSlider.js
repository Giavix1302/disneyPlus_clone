import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ItemSlider from "./ItemSlider";

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div>
            <Carousel {...settings}>
                <ItemSlider src='./images/slider/slider-badag.jpg' alt='' />
                <ItemSlider src='./images/slider/slider-badging.jpg' alt='' />
                <ItemSlider src='./images/slider/slider-scale.jpg' alt='' />
                <ItemSlider src='./images/slider/slider-scales.jpg' alt='' />
            </Carousel>
        </div>
    );
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.3 s ease;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: #969eab;
        }
    }

    li.slick-active button:before {
        color: white !important;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }

    .slick-dots {
        bottom: -32px;
    }

`

export default ImgSlider;