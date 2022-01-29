import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <nav className="mobile__nav hide">
          <div className="mobile_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Rockets</Link></li>
            <li><Link href="/">History</Link></li>
          </ul>
        </nav>
        <div>
            <Image src={Logo} />
        </div>
      </header>
    </>
  );
}
