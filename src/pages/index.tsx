import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { useRouter } from "next/router"

const Home: NextPageWithLayout = () => {

const router = useRouter();
console.log('router', router)
  return (
    <div className="bg-effect">
      <Head
        title="Home"
        description="Art is everyrging"
      />
      <FeaturedProducts />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
