import React, { Children } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  Navbar,
  Button,
  Text,
  Card,
  Container,
  Grid,
  Row,
} from "@nextui-org/react"
import GhazaliLogo from "../../../../components/ui/GhazaliLogo"
import { FaFacebookF, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa"

// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

export default function Footer() {
  const [variant, setVariant] = React.useState("static")
  const router = useRouter()
  const variants = ["static", "floating", "sticky"]

  const LinkItem = (props: { children: Node; href: string }) => {
    return (
      <li
        className={
          router.pathname === props.href ? "menu-item active" : "menu-item"
        }
      >
        <Link href={props.href}>{props.children}</Link>
      </li>
    )
  }
  return (
    <>
      <footer>
        <Container>
          <Row className="footer-row">
            <Grid xs={4}>
              <ul className="footer-menu-list">
                <LinkItem href="/content/terms-of-use">
                  Terms and conditions
                </LinkItem>
                <LinkItem href="/content/privacy-policy">
                  Privacy Policy
                </LinkItem>
                {/* <LinkItem href="/content/privacy-policy">Disclaimer</LinkItem> */}
              </ul>
            </Grid>
            <Grid xs={4} className="brand-logo">
              <Navbar.Brand>
                <p>
                  Made with <span style={{ color: "red" }}>❤️</span> by{" "}
                  <a href="https://descriptive.ai">Descriptive.ai</a>
                </p>
              </Navbar.Brand>
            </Grid>
            <Grid xs={4} className="right-menu">
              <ul className="footer-menu-list footer-menu-list-social">
                <a href="https//facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https//twitter.com">
                  <FaTwitterSquare />
                </a>
                <a href="https//linkedin.com">
                  <FaLinkedinIn />
                </a>
              </ul>
            </Grid>
          </Row>
        </Container>
      </footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"
        integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  )
}
