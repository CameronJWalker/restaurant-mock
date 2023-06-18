import Nav from '../styles/Nav.module.css'
import Link from "next/link"

export default function Navbar() {
    return (
        <div className={Nav.container}>
            <Link href="/menu" className={Nav.links}> Menu </Link>
            <Link href="/">
                <div className={Nav.logo}>
                    <img src='logo.png'/>
                </div>
            </Link>
            <Link href="/contact" className={Nav.links}> Contact Us </Link>
        </div>
    )
}