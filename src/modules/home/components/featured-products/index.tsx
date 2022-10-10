import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { FaArrowLeft, FaArrowRight, FaLinkedinIn } from "react-icons/fa"
// import Slider from "react-slick"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
  pauseOnHover: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}
function NextArrow(props) {
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

function PrevArrow(props) {
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
const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <>
      <h1 className="home-title">Browse Gallery</h1>
      <div className="home-slider-container" {...settings}>
        {data
          ? data.map((product) => (
              <li key={product.id}>
                <ProductPreview {...product} />
              </li>
            ))
          : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
      </div>
    </>
  )
}

export default FeaturedProducts
