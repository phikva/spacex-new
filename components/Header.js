import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.svg";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";


const containerMenu = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
};

const itemsNav = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
};

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const hide = useCallback(() => {
    setShowMenu(false);
  }, [setShowMenu]);

  useEffect(() => {
    setShowMenu(false);
    router.events.on("routeChangeStart", hide);
    return () => router.events.off("routeChangeStart", hide);
  }, [hide, router.events]);

  return (
    <>
      <header className="">
      <motion.div className=""
                 variants={containerMenu}
                 initial="hidden"
                 animate="show"
                 exit="exit"
                 >
        <nav className="xs:flex justify-between fixed w-full z-20">
        <motion.div className=""
                 variants={itemsNav}
                 initial="hidden"
                 animate="show"
                 exit="exit"
                 >
        <div className="logo p-5 md:hidden ">SpaceX</div></motion.div>
      <FontAwesomeIcon
              className="md:hidden p-5 "
              icon={faBars}
              size="2x"
              onClick={() => setShowMenu(!showMenu)}
            />
        
     
           

            {showMenu && (
                
              <div className="flex flex-col absolute left-0 right-0 top-0 bottom-0 h-screen z-20 bg-black">
                <div className="flex justify-end p-5" onClick={() => setShowMenu(!showMenu)}>
                  Close
                </div>
                <motion.div className=""
                 variants={itemsNav}
                 initial="hidden"
                 animate="show"
                 exit="exit"
                 >
                <ul className="flex flex-col text-center content-center pt-12 xs:text-3xl">
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
            </motion.div>
              </div>
           
            )}

<ul className="xs:hidden md:flex flex-row content-center justify-center p-3 pt-8 xs:text-xl w-full">
<div className="logo pr-5 ">SpaceX</div>
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

        
    
        </nav>
        </motion.div>
      </header>
    </>
  );
}
