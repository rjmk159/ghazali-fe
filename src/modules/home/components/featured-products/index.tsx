import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
// import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { Container } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaLinkedinIn } from "react-icons/fa"
import Slider from "react-slick";





const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    pauseOnHover: true,
    // variableWidth: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  function NextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props
    return (
      <div
        className={"home-slider-icon home-slider-icon-next"}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    )
  }
  
  function PrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props
    return (
      <div
        className={"home-slider-icon home-slider-icon-prev"}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    )
  }
  return (
    <Container>
      <h1 className="home-title">Browse Gallery</h1>
      <Slider className="home-slider-container" {...settings}>
        {data
          ? data.map((product) => (
              <li key={product.id} className="product-item">
                <ProductPreview {...product} home />
              </li>
            ))
          : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
      </Slider>
    </Container>
  )
}

export default FeaturedProducts
