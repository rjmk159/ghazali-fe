import Link from "next/link"

import { getProductSlug } from "../lib/util/api"

import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"
import { Container, Grid, Row } from "@nextui-org/react"

const Exhibition: NextPageWithLayout = ({ allExhibitions }) => {
  console.log("allExhibitions", allExhibitions)
  return (
    <>
      <Head title="Exhibition" description="Explore all of our Exhibitions." />
      <h1 className="main-title bg-effect">Exhibition</h1>
      <Container>
        {allExhibitions.map(({ id, index, year, imageUrl, title, isNew }) => (
          <Row className="exhibition-item" key={id}>
            <Grid className="exhibition-image-grid"  xs={6}>
              <div
                className="exhibition-image"
                style={{ backgroundImage: `url('/assets/${imageUrl}.png')` }}
              />
            </Grid>
            <Grid className="exhibition-content-grid" xs={6}>
              <div className="exhibition-content">
                <div className="exhibition-content-container">
                  {isNew && (
                    <span className="exhibition-tag">New Collection</span>
                  )}
                  <h4 className="exhibition-item-title">{title}</h4>
                  <p className="exhibition-item-date">{year}</p>
                  <Link href={`/exhibition/[id]`} as={`/exhibition/${id}`}>
                    <a className="exhibition-item-link">View Exhibition</a>
                  </Link>
                </div>
              </div>
            </Grid>
          </Row>
        ))}
      </Container>
    </>
  )
}

Exhibition.getLayout = (page) => <Layout>{page}</Layout>

export default Exhibition

export async function getServerSideProps() {
  let allExhibitions = await getProductSlug()
  allExhibitions = allExhibitions.map((el) => {
    return {
      ...el,
      imageUrl: Math.floor(Math.random() * 7 + 1),
    }
  })
  return {
    props: {
      allExhibitions,
    },
  }
}
