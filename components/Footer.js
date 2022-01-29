import Link from "next/link";
export default function Footer() {
    return (
 
      <footer>
          <div>
              <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Rockets</Link></li>
              <li><Link href="/">History</Link></li>
              </ul>
          </div>
          <div>
              <ul>
              <li><Link href="/">Instagram</Link></li>
              <li><Link href="/">Facebook</Link></li>
              <li><Link href="/">Youtube</Link></li>
              </ul>
          </div>
      </footer>
 
 
    );
  }