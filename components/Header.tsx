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
//     scriptUrl.src = 'https://fiika-inc.sakura.ne.jp/assets/js/main.js';
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

  // setTimeout(() => {
  //   location.reload();
  // }, 1000);

  let i = 0;

  let result = function() {
    i++;
    console.log(i);
    let time = setTimeout(result, 1000);
    if (i >= 2) {
      clearTimeout(time);
    }
  }
  result();

  return (
    <header>
      {/* <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://fiika-inc.sakura.ne.jp/assets/js/blog.js"
        strategy="afterInteractive"
      /> */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer />
      <script src="https://fiika-inc.sakura.ne.jp/assets/js/blog.js" defer />
      <div className="inner">
        <div className="header-top">
          <p className="txt-description">株式会社フィーカは、東京都あきる野市のウェブ制作・情報設計・システム開発・ウェブコンサルの会社です。</p>
          <div className="ht-inner">
            <p><Link href="https://fiika-inc.sakura.ne.jp/access/"><a>Access Map</a></Link></p>
            <button><Link href="https://fiika-inc.sakura.ne.jp/contact/"><a>Contact</a></Link></button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="logo-wrap">
            <p className="logo">
              <Link href="https://fiika-inc.sakura.ne.jp/">
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
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/"><a>サービス内容一覧</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/web/"><a>ホームページ制作</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/ia/"><a>UI/UX・情報設計</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/writing/"><a>記事作成代行サービス</a></Link></li>
                </ul>
              </li>
              <li><a href="https://fiika-inc.sakura.ne.jp/blog/tag/works.html" className="round_arrow dropdown">Works</a></li>
              <li className="has-child round_arrow dropdown"><a>About</a>
                <ul className="ul-about">
                  <li className="dropdown-category round_arrow">About</li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/about/"><a>会社概要</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/about/topmessage/"><a>トップメッセージ</a></Link></li>
                </ul>
              </li>
              <li className="has-child round_arrow dropdown"><a>Careers</a>
                <ul>
                  <li className="dropdown-category round_arrow">Careers</li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/careers/"><a>採用情報</a></Link></li>
                  <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/careers/entry/"><a>採用エントリー</a></Link></li>
                </ul>
              </li>
              <li><a href="https://fiika-inc.sakura.ne.jp/blog/" className="round_arrow dropdown">Blog & Topics</a></li>
              <li className="menu-access"><Link href="https://fiika-inc.sakura.ne.jp/access/"><a className="round_arrow dropdown">Access Map</a></Link></li>
              <li className="nav-button"><button><Link href="https://fiika-inc.sakura.ne.jp/contact/"><a>Contact</a></Link></button></li>

              <div className="nav-bottom">
                        <p className="privacypolicy">
                            <Link href="https://fiika-inc.sakura.ne.jp/privacypolicy/"><a>プライバシーポリシー</a></Link>
                            <Link href="https://fiika-inc.sakura.ne.jp/Security/"><a>情報セキュリティ方針</a></Link>
                        </p>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
