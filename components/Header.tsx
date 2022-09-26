import { AppMeta } from "newt-client-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/Header.module.css";

export function Header({ app }: { app: AppMeta }): JSX.Element {
  const router = useRouter();
  const { q } = router.query;
  const searchRef = useRef<HTMLInputElement>();

  const [searchText, setSearchText] = useState(q);

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

  return (
    // <header className={styles.Header}>
    //   <div className={styles.Header_Inner}>
    //     <Link href="/">
    //       <a href="#" className={styles.Title}>
    //         {app.icon?.type === "emoji" && (
    //           <span className={styles.Title_Icon}>{app.icon.value}</span>
    //         )}
    //         {app.icon?.type === "image" && (
    //           <span className={styles.Title_Icon}>
    //             <img src={app.icon.value} alt="" />
    //           </span>
    //         )}
    //         <div className={styles.Title_Text}>{app.name || app.uid || ""}</div>
    //       </a>
    //     </Link>
    //     <div className={styles.Link}>
    //       <a
    //         href="https://github.com/Newt-Inc/newt-blog2-starter-nextjs"
    //         rel="noreferrer noopener"
    //         target="_blank"
    //       >
    //         GitHub
    //       </a>
    //     </div>
    //     <div className={styles.Search}>
    //       <button
    //         type="button"
    //         className={styles.Search_Button}
    //         onClick={focus}
    //       >
    //         <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
    //           <path
    //             d="M9.3890873 1.6109127c1.81744 1.81743998 2.0970461 4.59036739.8388184 6.7018035l3.3116969 3.3126728c.3547755.3547755.3257954.9589604-.0647289 1.3494847-.3626297.3626297-.9094871.4135198-1.2698126.1348865l-.0796721-.0701576-3.22015474-3.21985629C6.7465078 11.5258295 3.60410194 11.3822765 1.6109127 9.3890873c-2.1478836-2.14788361-2.1478836-5.63029099 0-7.7781746 2.14788361-2.1478836 5.63029099-2.1478836 7.7781746 0zM2.95984943 2.95984943c-1.40288642 1.40288642-1.40288642 3.67741472 0 5.08030114 1.40288642 1.40288642 3.67741472 1.40288642 5.08030114 0 1.40288642-1.40288642 1.40288642-3.67741472 0-5.08030114-1.40288642-1.40288642-3.67741472-1.40288642-5.08030114 0z"
    //             fill="#333"
    //             fillRule="nonzero"
    //           />
    //         </svg>
    //       </button>
    //       <form action="/blog/search">
    //         <div className={styles.Search_Input}>
    //           <input
    //             ref={searchRef}
    //             name="q"
    //             type="search"
    //             value={searchText}
    //             onChange={(e) => setSearchText(e.target.value)}
    //             placeholder="Search"
    //           />
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </header>
    <header>
      <div className="inner">
          <div className="header-top">
              <p className="txt-description">株式会社フィーカは、東京都あきる野市のウェブ制作・情報設計・システム開発・ウェブコンサルの会社です。</p>
              <div className="ht-inner">
                  <p><a href="/access/">Access Map</a></p>
                  <button><a href="/contact/">Contact</a></button>
              </div>
          </div>
          <div className="header-bottom">
              <div className="logo-wrap">
                  <p className="logo"><a href="/"><img src="/assets/img/img-logo-01.png" alt="fiika inc."></a></p>
                  <div className="openbtn"><span></span><span></span><span></span></div>
              </div>
              <nav>
                  <ul className="gnav">
                      <li className="has-child round_arrow dropdown"><a href="/service/">Service</a>
                          <ul>
                          <li className="dropdown-category round_arrow">Service</li>
                          <li className="dropdown-list"><a href="/service/">サービス内容一覧</a></li>
                          <li className="dropdown-list"><a href="/service/web/">ホームページ制作</a></li>
                          <li className="dropdown-list"><a href="/service/ec/">ネットショップ構築</a></li>
                          <li className="dropdown-list"><a href="/service/movie/">動画制作・写真撮影</a></li>
                          <li className="dropdown-list"><a href="/service/ia/">情報設計</a></li>
                          <li className="dropdown-list"><a href="/service/writing/">記事作成代行サービス</a></li>
                          </ul>
                      </li>
                      <li><a className="round_arrow dropdown" href="/blog/tag/works.html">Works</a></li>
                      <li className="has-child round_arrow dropdown"><a href="/about/">About</a>
                          <ul>
                              <li className="dropdown-category round_arrow">About</li>
                              <li className="dropdown-list"><a href="/about/">会社概要</a></li>
                              <li className="dropdown-list"><a href="/about/topmessage/">トップメッセージ</a></li>
                          </ul>
                      </li>
                      <li className="has-child round_arrow dropdown"><a href="/careers/">Careers</a>
                          <ul>
                          <li className="dropdown-category round_arrow">Careers</li>
                          <li className="dropdown-list"><a href="/careers">採用情報</a></li>
                          <li className="dropdown-list"><a href="/careers/entry/">採用エントリー</a></li>
                          </ul>
                      </li>
                      <li><a className="round_arrow dropdown" href="/blog/">Blog & Topix</a></li>
                      <li className="nav-button"><button><a href="/contact/">Contact</a></button></li>
                  </ul>
              </nav>
          </div>
      </div>
    </header>
  );
}
