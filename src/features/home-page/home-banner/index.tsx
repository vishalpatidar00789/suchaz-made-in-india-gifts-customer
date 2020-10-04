import React, { FC } from 'react';
import HomeBannerWrapper, {
    HomeBannerContainer,
    HomeBannerSectionLeft,
    HomeBannerDiv,
} from '../home-banner/home-banner.style';
import { Settings } from 'react-slick';
import Link from 'next/link';
import { StyledSlider } from 'components/carousel/arrow-button.style';
import ArrowButton from 'components/carousel/arrow-button';

const HomeBanner: FC = () => {
    const carouselSetting: Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowButton directionType="next" icon="icon-chevron-right" />,
        prevArrow: <ArrowButton directionType="prev" icon="icon-chevron-left" />,
    };
    return (
        <HomeBannerWrapper>
            <HomeBannerContainer>
                <HomeBannerSectionLeft>
                    <StyledSlider {...carouselSetting}>
                        <HomeBannerDiv>
                            {/* <Link href="/shop"> */}
                            <a>
                                <img
                                    src="/static/img/slider/made-in-india-gifts-vocal-for-local.png"
                                    alt="Vocal for Local with MadeInIndiaGifts.in"
                                />
                            </a>
                            {/* </Link> */}
                        </HomeBannerDiv>
                        <HomeBannerDiv>
                            <Link href="/gifts?by=Category&name=Decorative Wall Clock">
                                <a>
                                    <img
                                        src="/static/img/slider/offer-clock.png"
                                        alt="Hot deals on decorative wall clocks at MadeInIndiaGifts.in"
                                    />
                                </a>
                            </Link>
                        </HomeBannerDiv>
                        <HomeBannerDiv>
                            {/* <Link href="/shop"> */}
                            <a>
                                <img
                                    src="/static/img/slider/zero-contact-delivery-indiagifts.png"
                                    alt="We deliver gits with zero contact at MadeInIndiaGifts.in"
                                />
                            </a>
                            {/* </Link> */}
                        </HomeBannerDiv>
                    </StyledSlider>
                </HomeBannerSectionLeft>
            </HomeBannerContainer>
        </HomeBannerWrapper>
    );
};

export default HomeBanner;
