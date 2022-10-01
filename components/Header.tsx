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
    <header className={styles.Header}>
      <div className="inner">
          <div className="header-top">
              <p className="txt-description">株式会社フィーカは、東京都あきる野市のウェブ制作・情報設計・システム開発・ウェブコンサルの会社です。</p>
              <div className="ht-inner">
                  <p><Link href="/"><a href="#">Access Map</a></Link></p>
                  <button><a href="/contact/">Contact</a></button>
              </div>
          </div>
          <div className="header-bottom">
              <div className="logo-wrap">
                  <p className="logo">
                    <Link href="/">
                      <a href="#"><img src="./../img-logo-01.png" /></a>
                    </Link>
                  </p>
                  <div className="openbtn"><span></span><span></span><span></span></div>
              </div>
              <nav>
                  <ul className="gnav">
                      <li className="has-child round_arrow dropdown"><Link href="/service/"><a href="#">Service</a></Link>
                          <ul>
                          <li className="dropdown-category round_arrow">Service</li>
                          <li className="dropdown-list"><Link href="/service/"><a href="#">サービス内容一覧</a></Link></li>
                          <li className="dropdown-list"><Link href="/service/web/"><a href="#">ホームページ制作</a></Link></li>
                          <li className="dropdown-list"><Link href="/service/ec/"><a href="#">ネットショップ構築</a></Link></li>
                          <li className="dropdown-list"><Link href="/service/movie/"><a href="#">動画制作・写真撮影</a></Link></li>
                          <li className="dropdown-list"><Link href="/service/ia/"><a href="#">情報設計</a></Link></li>
                          <li className="dropdown-list"><Link href="/service/writing/"><a href="#">記事作成代行サービス</a></Link></li>
                          </ul>
                      </li>
                      <li><Link href="/"><a className="round_arrow dropdown">Works</a></Link></li>
                      <li className="has-child round_arrow dropdown"><Link href="/about/"><a href="#">About</a></Link>
                          <ul>
                              <li className="dropdown-category round_arrow">About</li>
                              <li className="dropdown-list"><Link href="/about/"><a href="#">会社概要</a></Link></li>
                              <li className="dropdown-list"><Link href="/about/topmessage/"><a href="#">トップメッセージ</a></Link></li>
                          </ul>
                      </li>
                      <li className="has-child round_arrow dropdown"><Link href="/careers/"><a href="#">Careers</a></Link>
                          <ul>
                          <li className="dropdown-category round_arrow">Careers</li>
                          <li className="dropdown-list"><Link href="/careers/"><a href="#">採用情報</a></Link></li>
                          <li className="dropdown-list"><Link href="/careers/entry/"><a href="#">採用エントリー</a></Link></li>
                          </ul>
                      </li>
                      <li><Link href="/contact/"><a className="round_arrow dropdown">Blog & Topix</a></Link></li>
                      <li className="nav-button"><button><Link href="/contact/"><a href="#">Contact</a></Link></button></li>
                  </ul>
              </nav>
          </div>
      </div>
    </header>
  );
}
