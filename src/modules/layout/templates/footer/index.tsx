import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Button, Text, Card, Radio, Grid } from "@nextui-org/react";
import GhazaliLogo from "../../../../components/ui/GhazaliLogo";
import { FaFacebookF, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa";

// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'


export default function Footer() {
	const [variant, setVariant] = React.useState("static");
	const router = useRouter();
	const variants = ["static", "floating", "sticky"];

	const LinkItem = ({ children, href }) => {
		console.log(router.pathname, href);
		return (
			<li className={router.pathname === href ? "menu-item active" : "menu-item"}>
				<Link href={href}>{children}</Link>
			</li>
		);
	};
	return (
		<footer>
			<Navbar isBordered variant={variant}>
				<Grid xs={4}>
					<Navbar.Content hideIn="xs">
						<LinkItem href="/content/terms-of-use">Terms and conditions</LinkItem>
						<LinkItem href="/content/privacy-policy">Privacy Policy</LinkItem>
						<LinkItem href="/content/privacy-policy">Disclaimer</LinkItem>
					</Navbar.Content>
				</Grid>
				<Grid xs={4} className="brand-logo">
					<Navbar.Brand>
						<Link href="/">
							<GhazaliLogo />
						</Link>
					</Navbar.Brand>
				</Grid>
				<Grid xs={4} className="right-menu">
					<Navbar.Content>
						<Link href="https//facebook.com"><FaFacebookF /></Link>
						<Link  href="https//twitter.com"><FaTwitterSquare /></Link>
						<Link  href="https//linkedin.com"><FaLinkedinIn/></Link>
					</Navbar.Content>
				</Grid>
			</Navbar>
		</footer>
	);
}

