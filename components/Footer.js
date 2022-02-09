import Link from "next/link";



export default function Footer() {


    return (
 
      <footer>
          <div className="row">
              <button className="btn">
                 <Link href="/contact">Contact</Link> 
              </button>
          </div>
         
          <div className="row">
              <ul>
              <li><a  href="https://twitter.com/elonmusk" target="_blank"> Twitter </a></li>
              <li><a href="https://www.youtube.com/c/SpaceX" target="_blank"> Youtube </a></li>
              <li><a href="https://instagram.com/spaceX" target="_blank"> Instagram </a></li>
              <li><a href="https://flickr.com/photos/spacex" target="_blank"> Flickr</a></li>
              </ul>
        </div>
      </footer>
 
 
    );
  }