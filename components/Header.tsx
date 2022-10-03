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
    <header>
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
                    <Link href="/">
                      <a><img src="/img/img-logo-01.png" /></a>
                    </Link>
                  </p>
                  <div className="openbtn"><span></span><span></span><span></span></div>
              </div>
              <nav>
                  <ul className="gnav">
                      <li className="has-child round_arrow dropdown"><Link href="https://fiika-inc.sakura.ne.jp/service/"><a>Service</a></Link>
                          <ul>
                          <li className="dropdown-category round_arrow">Service</li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/"><a>サービス内容一覧</a></Link></li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/web/"><a>ホームページ制作</a></Link></li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/ec/"><a>ネットショップ構築</a></Link></li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/movie/"><a>動画制作・写真撮影</a></Link></li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/ia/"><a>情報設計</a></Link></li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/service/writing/"><a>記事作成代行サービス</a></Link></li>
                          </ul>
                      </li>
                      <li><Link href="https://fiika-inc.sakura.ne.jp/blog/tag/works/"><a className="round_arrow dropdown">Works</a></Link></li>
                      <li className="has-child round_arrow dropdown"><Link href="https://fiika-inc.sakura.ne.jp/blog/tag/works/"><a>Works</a></Link>
                          <ul>
                              <li className="dropdown-category round_arrow">About</li>
                              <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/about/"><a>会社概要</a></Link></li>
                              <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/about/topmessage/"><a>トップメッセージ</a></Link></li>
                          </ul>
                      </li>
                      <li className="has-child round_arrow dropdown"><Link href="https://fiika-inc.sakura.ne.jp/careers/"><a>Careers</a></Link>
                          <ul>
                          <li className="dropdown-category round_arrow">Careers</li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/careers/"><a>採用情報</a></Link></li>
                          <li className="dropdown-list"><Link href="https://fiika-inc.sakura.ne.jp/careers/entry/"><a>採用エントリー</a></Link></li>
                          </ul>
                      </li>
                      <li><Link href="https://fiika-inc.sakura.ne.jp/blog/"><a className="round_arrow dropdown">Blog & Topics</a></Link></li>
                      <li className="nav-button"><button><Link href="https://fiika-inc.sakura.ne.jp/contact/"><a>Contact</a></Link></button></li>
                  </ul>
              </nav>
          </div>
      </div>
    </header>
  );
}
