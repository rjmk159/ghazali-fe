import AccountLayout from "@modules/account/templates/account-layout"
import AddressesTemplate from "@modules/account/templates/addresses-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { Container } from "@nextui-org/react"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Addresses: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Addresses" description="View your addresses" />
      <AddressesTemplate />
    </>
  )
}

Addresses.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <Container>
      <AccountLayout>{page}</AccountLayout>
      </Container>
    </Layout>
  )
}

export default Addresses
