import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.svg";
import { useState, useEffect, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  
  const hide = useCallback(() => {
    setShowMenu(false);
  }, [setShowMenu]);

  useEffect(() => {
    setShowMenu(false);
    router.events.on('routeChangeStart', hide);
    return () => router.events.off('routeChangeStart', hide);
  }, [hide, router.events]);

  
  
  return (
    <>
      <header>
        <nav>
          <div className="nav__content">
          <FontAwesomeIcon
          className="hamburger"
              icon={faBars}
              size="2x"
              onClick={() => setShowMenu(!showMenu)}
              
              
            />
          
 {showMenu  && (

            <div className="menu-show"> 
               <div className="close"
             onClick={() => setShowMenu(!showMenu)} >
              Close
              </div>
            <ul>
             
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/falcon9">Falcon 9</Link>
              </li>
              <li>
                <Link href="/falconHeavy">Falcon Heavy</Link>
              </li>
              <li>
                <Link href="/starship">Starship</Link>
              </li>
              <li>
                <Link href="/history">History</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
           
            </ul>
            </div>
              )} 
          </div>


 
        </nav>
        <div className="container__logo">
          <Image src={Logo}
          width="200"
          />
        </div>
      </header>
    </>
  );
}
