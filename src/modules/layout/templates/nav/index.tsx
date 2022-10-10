import { useMobileMenu } from "@lib/context/mobile-menu-context"

import React, { Children } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Navbar, Button, Text, Card, Radio, Grid } from "@nextui-org/react"
import GhazaliLogo from "../../../../components/ui/GhazaliLogo"
import Hamburger from "@modules/common/components/hamburger"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import CartDropdown from "@modules/layout/components/cart-dropdown"

export default function Header() {
  const [variant, setVariant] = React.useState("sticky")
  const router = useRouter()

  const { toggle } = useMobileMenu()

  const LinkItem = ({ children, href }) => {
    console.log(router.pathname, href)
    return (
      <li
        className={router.pathname.includes(href) ? "menu-item active" : "menu-item"}
      >
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </li>
    )
  }
  return (
    <>
      <Navbar isBordered variant={variant}>
        <Grid xs={4}>
          <Navbar.Content hideIn="xs">
            <LinkItem href="/about">About</LinkItem>

            <LinkItem href="/arts">Shop</LinkItem>
            <LinkItem href="/exhibition">Exhibition</LinkItem>
            <LinkItem href="/contact">Contact</LinkItem>
          </Navbar.Content>
        </Grid>
        <Grid xs={4} className="brand-logo">
          <Navbar.Brand>
            <Link href="/">
              <a>
                <GhazaliLogo />
              </a>
            </Link>
          </Navbar.Brand>
        </Grid>
        <Grid xs={4} className="right-menu">
          <Navbar.Content>
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <CartDropdown />
            {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
            <LinkItem href="/account">
              <a>Account</a>
            </LinkItem>
          </Navbar.Content>
        </Grid>
        <MobileMenu />
      </Navbar>
    </>
  )
}
