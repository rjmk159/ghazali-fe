/* eslint-disable */
import { useMobileMenu } from "@lib/context/mobile-menu-context"

import React, { Children } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  Navbar,
  Button,
  Text,
  Card,
  Radio,
  Grid,
  Container,
  Row,
} from "@nextui-org/react"
import GhazaliLogo from "../../../../components/ui/GhazaliLogo"
import Hamburger from "@modules/common/components/hamburger"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import CartDropdown from "@modules/layout/components/cart-dropdown"

export default function Header() {
  const [variant, setVariant] = React.useState("sticky")
  const router = useRouter()

  const { toggle } = useMobileMenu()

  const LinkItem = (props: { children: any; href: string }) => {
    return (
      <li
        className={
          router.pathname.includes(props.href) ? "menu-item active" : "menu-item"
        }
      >
        <Link href={props.href}>{props.children}</Link>
      </li>
    )
  }
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <div className="nav">
        <Container>
          <Row className="nav-row">
            <Grid xs={5} lg={4} className="menu-container-grid">
              <ul className="menu-container">
                <LinkItem href="/about">About</LinkItem>

                <LinkItem href="/arts">Shop</LinkItem>
                <LinkItem href="/exhibitions">Exhibition</LinkItem>
              </ul>
            </Grid>
            <Grid xs={8} lg={4} className="brand-logo">
              <Navbar.Brand>
                <Link href="/">
                  <a>
                    <GhazaliLogo />
                  </a>
                </Link>
              </Navbar.Brand>
            </Grid>
            <Grid xs={5} lg={4} className="right-menu menu-container-grid">
              <ul className="menu-container">
               
                {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
                <LinkItem href="/account">
                  <a>Account</a>
                </LinkItem>
                <LinkItem href="/contact">Contact</LinkItem>
                <CartDropdown />
              </ul>
            </Grid>
            <Grid xs={4} lg={4} className="block small:hidden hamburder">
          
     
                <Hamburger setOpen={toggle} />
              </Grid>
         
            <MobileMenu />
          </Row>
        </Container>
      </div>
    </>
  )
}
