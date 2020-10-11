import ArrowButton from 'components/carousel/arrow-button';
import React, { FC, useState } from 'react';
import ThumbnailImage from './thumbnail-image';
import ThumbnailWrapper, { ProductGallerySlider, ProductVariantSlider } from './thumbnail.style';
import { isStaticData } from 'utilities/app-settings';
import Lightbox from 'react-image-lightbox';
type ThumbnailProps = {
    product: any;
};
const Thumbnail: FC<ThumbnailProps> = ({ product }) => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [galleryCarousel, setGalleryCarousel] = useState<any>(null);
    const [variantCarousel, setVariantCarousel] = useState<any>(null);
    const gallerySetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowButton directionType="next" icon="icon-chevron-right" />,
        prevArrow: <ArrowButton directionType="prev" icon="icon-chevron-left" />,
    };
    const variantSetting = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: false,
                    vertical: false,
                    infinite: false,
                },
            },
        ],
    };

    const productImages = [];
    product.images.map((variant) => {
        if (isStaticData === false) {
            productImages.push(variant);
        } else {
            productImages.push(variant);
        }
    });

    const handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        setPhotoIndex(imageIndex);
        setIsOpen(true);
    };
    return (
        <ThumbnailWrapper dataVertical={true}>
            <figure>
                <ProductGallerySlider
                    {...gallerySetting}
                    asNavFor={variantCarousel}
                    ref={(slider1) => setGalleryCarousel(slider1)}>
                    {product.images.map((variant, index) => (
                        <div className="item" key={index}>
                            <a href="#" onClick={(e) => handleOpenLightbox(e, index)}>
                                <ThumbnailImage key={index} url={variant} />
                            </a>
                        </div>
                    ))}
                </ProductGallerySlider>
            </figure>
            <ProductVariantSlider
                {...variantSetting}
                asNavFor={galleryCarousel}
                ref={(slider2) => setVariantCarousel(slider2)}
                swipeToSlide={true}
                arrows={false}
                slidesToShow={product.images.length}
                vertical={true}
                focusOnSelect={true}>
                {product.images.map((variant, index) => (
                    <div className="item" key={index}>
                        <ThumbnailImage url={variant} />
                    </div>
                ))}
            </ProductVariantSlider>
            {isOpen && (
                <Lightbox
                    mainSrc={productImages[photoIndex]}
                    nextSrc={productImages[(photoIndex + 1) % productImages.length]}
                    prevSrc={productImages[(photoIndex + productImages.length - 1) % productImages.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length)
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % productImages.length)}
                />
            )}
        </ThumbnailWrapper>
    );
};

export default Thumbnail;
