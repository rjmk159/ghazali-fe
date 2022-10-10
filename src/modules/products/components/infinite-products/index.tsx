import { fetchProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { Container } from "@nextui-org/react"
import { useCart } from "medusa-react"
import { useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useInfiniteQuery } from "react-query"

type InfiniteProductsType = {
  params: StoreGetProductsParams
}

const InfiniteProducts = ({
  params,
  matchWithCollectionId,
  hideMasnory,
}: InfiniteProductsType) => {
  const { cart } = useCart()

  const { ref, inView } = useInView()

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, params])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })
  console.log("previews", previews)
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <Container>
      <div className={hideMasnory ? "product-item-show-shadow" : "df"}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {previews.map((p, index) => {
              return (
                <div className="product-item" key={p.id + index}>
                  <ProductPreview {...p} />
                </div>
              )
            })}
            {isLoading &&
              !previews.length &&
              repeat(8).map((index) => (
                <div className="product-item" key={index}>
                  <SkeletonProductPreview />
                </div>
              ))}
            {isFetchingNextPage &&
              repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
                <div key={index}>
                  <SkeletonProductPreview />
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>

        <div
          className="py-16 flex justify-center items-center text-small-regular text-gray-700"
          ref={ref}
        >
          <span data-junaid="asdasad" ref={ref}></span>
        </div>
      </div>
    </Container>
  )
}

export default InfiniteProducts
