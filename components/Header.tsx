import { AppMeta } from "newt-client-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
// import styles from "../styles/Header.module.css";

import Script from 'next/script';

export function Header({ app }: { app: AppMeta }): JSX.Element {
  const router = useRouter();
  const { q } = router.query;
  const searchRef = useRef<HTMLInputElement>();

  const [searchText, setSearchText] = useState(q);

//   useEffect(() => {
//     const head = document.getElementsByTagName('head')[0] as HTMLElement;
//     const scriptUrljQuery = document.createElement('script');
//     scriptUrljQuery.type = 'text/javascript';
//     scriptUrljQuery.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
//     head.appendChild(scriptUrljQuery);

//     const scriptUrl = document.createElement('script');
//     scriptUrl.type = 'text/javascript';
//     scriptUrl.src = 'https://fiika-inc.co.jp/assets/js/main.js';
//     head.appendChild(scriptUrl);
// }, []);

  const focus = useCallback(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef]);

  useEffect(() => {
    if (q) {
      setSearchText(q);
    }
  }, [q]);

  setTimeout(() => {
    // location.reload();
    if (window.location.search.indexOf("?blog") == -1) {
      window.location.search += "?blog";
    }
    if (window.location.search.indexOf('?blog') !== -1) {
      clearTimeout();
    }
  }, 100);

  // let i = 0;

  // let result = function() {
  //   i++;
  //   console.log(i);
  //   let time =   setTimeout(() => {location.reload();}, 1000);
  //   if (i >= 2) {
  //     clearTimeout(time);
  //   }
  // }
  // result();

  // let i = 0;

  // let result = function() {
  //   i++;
  //   console.log(i);
  //   let time =   setTimeout(() => {location.reload();}, 1000);
    
  //   if (window.location.search.indexOf("?blog") == -1) {
  //     window.location.search += "?blog";
  //   }
  //   if (window.location.search.indexOf('?blog') !== -1) {
  //     clearTimeout(time);
  //   }
  // }
  // result();

  // if (window.location.search.indexOf("?blog") == -1) {
  //   window.location.search += "?blog";
  // }

  // window.onload = function() {
  //   if (window.location.search.indexOf('?blog') !== -1) {
  //     clearTimeout();
  //   }
  // }

  return (
    <header>
      {/* <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://fiika-inc.co.jp/assets/js/blog.js"
        strategy="afterInteractive"
      /> */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer />
      <script src="https://fiika-inc.co.jp/assets/js/blog.js" defer />
      <div className="inner">
        <div className="header-top">
          <p className="txt-description">??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          <div className="ht-inner">
            <p><Link href="https://fiika-inc.co.jp/access/"><a>Access Map</a></Link></p>
            <button><Link href="https://fiika-inc.co.jp/contact/"><a>Contact</a></Link></button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="logo-wrap">
            <p className="logo">
              <Link href="https://fiika-inc.co.jp/">
                <a><img src="/img/img-logo-01.png" /></a>
              </Link>
            </p>
            <div className="openbtn"><span></span><span></span><span></span></div>
          </div>
          <nav>
            <ul className="gnav">
              <li className="has-child round_arrow dropdown"><a>Service</a>
                <ul className="ul-service">
                  <li className="dropdown-category round_arrow">Service</li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/"><a>????????????????????????</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/web/"><a>????????????????????????</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/ia/"><a>UI/UX???????????????</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/consulting/"><a>?????????????????????????????????</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/writing/"><a>??????????????????????????????</a></Link></li>
                </ul>
              </li>
              <li><a href="https://fiika-inc.co.jp/blog/tag/works/" className="round_arrow dropdown">Works</a></li>
              <li className="has-child round_arrow dropdown"><a>About</a>
                <ul className="ul-about">
                  <li className="dropdown-category round_arrow">About</li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/about/"><a>????????????</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/about/topmessage/"><a>????????????????????????</a></Link></li>
                </ul>
              </li>
              <li className="has-child round_arrow dropdown"><a>Careers</a>
                <ul>
                  <li className="dropdown-category round_arrow">Careers</li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/careers/"><a>????????????</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/careers/entry/"><a>?????????????????????</a></Link></li>
                </ul>
              </li>
              <li><a href="https://fiika-inc.co.jp/blog/" className="round_arrow dropdown">Blog & Topics</a></li>
              <li className="menu-access"><Link href="https://fiika-inc.co.jp/access/"><a className="round_arrow dropdown">Access Map</a></Link></li>
              <li className="nav-button"><button><Link href="https://fiika-inc.co.jp/contact/"><a>Contact</a></Link></button></li>

              <div className="nav-bottom">
                        <p className="privacypolicy">
                            <Link href="https://fiika-inc.co.jp/privacypolicy/"><a>??????????????????????????????</a></Link>
                            <Link href="https://fiika-inc.co.jp/Security/"><a>??????????????????????????????</a></Link>
                        </p>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
