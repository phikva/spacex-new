import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.svg";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

//Animate
const containerHeader = {
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
};


const itemHeader = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemLogo = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemLogoDesktop = {
  hidden: {
    opacity: 0,
    x: -500,
    y: -150,
  },
  show: {
    opacity: 1,
    x: 0,
    y: -50,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: -500,
    y: -150,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemLogoMenu = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
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
      <header>
        <motion.div
          variants={containerHeader}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <nav>
         
            <motion.div variants={itemHeader}>
              <div className="nav__content">
                <FontAwesomeIcon
                  className="hamburger"
                  icon={faBars}
                  size="2x"
                  onClick={() => setShowMenu(!showMenu)}
                />
                
                {showMenu && (
                  
                  <div className="menu-show">
                    <div
                      className="close"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      Close
                    </div>

                    <ul>
                    <motion.div variants={itemHeader}>
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
                      </motion.div>
                    </ul>
                    

                    <motion.div variants={itemLogoMenu}>
                      <div className="container__logo">
                    
                        <Image src={Logo} width="200" />
                 
                      </div>
                    </motion.div>
                  </div>
                  
                )}
                 <motion.div variants={itemLogoMenu}>
                      <div className="container__logo-mobile">
                    
                        <Image src={Logo} width="200" />
                 
                      </div>
                    </motion.div>
                <div className="menu-desktop">
                 

                 <ul>
                 {/* <motion.div variants={itemHeader}> */}
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
                   {/* </motion.div> */}
                 </ul>
                 <motion.div variants={itemLogoDesktop}>
                <div className="container__logo">
     
              <Image src={Logo} width="200" />
        
            </div>
          </motion.div>
                
               </div>
              
              </div>
              
            </motion.div>
          </nav>
       
        </motion.div>
      </header>
    </>
  );
}
