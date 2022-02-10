import '../css/globals.css'
import Layout from "../components/Layout"
import {motion, AnimatePresence} from "framer-motion"


function MyApp({ Component, pageProps }) {

  
  return (
  <AnimatePresence>
  
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </AnimatePresence>
  );
}



export default MyApp
