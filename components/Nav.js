import Link from "next/link";
import Image from "next/image";
import navStyles from '../styles/Nav.module.css';



const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            
                <Link href="/">Ken Mwangi</Link>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
