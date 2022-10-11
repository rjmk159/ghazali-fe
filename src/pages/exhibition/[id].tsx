import InfiniteProducts from "@modules/products/components/infinite-products"
import { useState } from "react"
import { IS_BROWSER } from "@lib/constants"
import { getProductDetails } from "@lib/util/api"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import ExhibitionTemplate from "@modules/products/templates/ExhibitionTemplate"
import SkeletonProductPage from "@modules/skeletons/templates/skeleton-product-page"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { ReactElement } from "react"
import { NextPageWithLayout, PrefetchedPageProps } from "types/global"
import { StoreGetProductsParams } from "@medusajs/medusa"

interface Params extends ParsedUrlQuery {
  handle: string
}

const ExhibitionPage: NextPageWithLayout<PrefetchedPageProps> = ({
  notFound,
  exhibition,
}) => {
  const { query, isFallback, replace } = useRouter()
  const [params, setParams] = useState<StoreGetProductsParams>({})
  console.log("params", params)
  if (notFound) {
    if (IS_BROWSER) {
      replace("/404")
    }

    return <SkeletonProductPage />
  }

  if (exhibition) {
    return (
      <>
        <Head
          description={exhibition.description}
          title={exhibition.title}
          image={exhibition.thumbnail}
        />
        <ExhibitionTemplate exhibition={exhibition} />
        <InfiniteProducts params={params} hideMasnory />
      </>
    )
  }

  return <></>
}

ExhibitionPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps(context) {
  const { id } = context.query

  let res = await getProductDetails(id)
  if (!res) {
    return {
      props: {
        notFound: true,
        exhibition: null,
      },
    }
  }

  return {
    props: {
      exhibition: res,
      notFound: false,
    },
  }
}

export default ExhibitionPage
