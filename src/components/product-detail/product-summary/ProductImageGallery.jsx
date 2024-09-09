import "@style/product-detail/product-summary/ProductImageGallery.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useState } from "react";

const ProductImageGallery = ({ imgs, discount, hot }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div className="gallery">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Thumbs]}
        allowTouchMove={false}
        className="mySwiper2">
        {imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="zoom-banner">
              <div className="product-label">
                {discount !== "0%" && discount !== "SOLD OUT" && (
                  <div className="onsale">
                    <span>-{discount}</span>
                  </div>
                )}
                {discount === "SOLD OUT" && (
                  <div className="onsale sold-out">
                    <span>{discount}</span>
                  </div>
                )}

                {hot && (
                  <div className="onsale featured">
                    <span>Hot</span>
                  </div>
                )}
              </div>

              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`${item}.jpg`}
                zoomSrc={`${item}.jpg`}
                alt={`Zoomed view of product image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="box-bottom">
        <Swiper
          onSwiper={handleSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="product-gallery">
          {imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item-gallery">
                <img src={`${item}-400x400.jpg`} alt={`Thumbnail of product image ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImageGallery;
