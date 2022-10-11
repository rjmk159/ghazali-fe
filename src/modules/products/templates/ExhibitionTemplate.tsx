import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import { Product } from "@medusajs/medusa"
import ProductTabs from "@modules/products/components/product-tabs"
// import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import { Container } from "@nextui-org/react"
import React, { useRef } from "react"
import { FaQuoteLeft } from "react-icons/fa"

type ExhibitionTemplateProps = {
  exhibition: {
    imageUrl: any
    isNew: boolean
    title: string
    year: string
    description: string
    description_2: string
  }
}

const ExhibitionTemplate: React.FC<ExhibitionTemplateProps> = ({
  exhibition,
}) => {
  const info = useRef<HTMLDivElement>(null)

  const inView = useIntersection(info, "0px")

  return (
    <Container>
      <div
        className="single-exhibition-item"
        style={{ backgroundImage: `url('/assets/${exhibition.imageUrl}.png')` }}
      >
        <div className="single-exhibition-content">
          <span className="single-exhibition-title">
            {exhibition.isNew && (
              <span className="exhibition-tag single-exhibition-tag">
                New Collection
              </span>
            )}

            <span className="exhibition-title">{exhibition.title}</span>
            <span>{exhibition.year}</span>
          </span>
        </div>
      </div>
      <FaQuoteLeft size={40} color="#ececec" />
      <div className="single-exhibition-description">
        {exhibition.description}
      </div>
      <div className="single-exhibition-description-2">
        {exhibition.description_2}
      </div>
    </Container>
  )
}

export default ExhibitionTemplate
