import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import { useRouter } from "next/router"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  const router = useRouter()
  const home = router.pathname === "/"
  return (
    <Link href={`/art/${handle}`}>
      <a>
        <div>
          <Thumbnail thumbnail={thumbnail} size="full" />
          <div className={`text-base-regular mt-2 ${home && "caption"}`}>
            <span>{title}</span>
            {!home && (
              <div className="flex items-center gap-x-2 mt-1">
                {price ? (
                  <>
                    {price.price_type === "sale" && (
                      <span className="line-through text-gray-500">
                        {price.original_price}
                      </span>
                    )}
                    <span
                      className={clsx("font-semibold", {
                        "text-rose-500": price.price_type === "sale",
                      })}
                    >
                      {price.calculated_price}
                    </span>
                  </>
                ) : (
                  <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
                )}
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
