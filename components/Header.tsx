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
  <div classname="inner">
    <div classname="header-top">
      <p classname="txt-description">株式会社フィーカは、東京都あきる野市のウェブ制作・情報設計・システム開発・ウェブコンサルの会社です。</p>
      <div classname="ht-inner">
        <p><link href="/" /><a href="#">Access Map</a></p>
        <button><a href="/contact/">Contact</a></button>
      </div>
    </div>
    <div classname="header-bottom">
      <div classname="logo-wrap">
        <p classname="logo">
          <link href="/" />
          <a href="#"><img src="./../img-logo-01.png" /></a>
        </p>
        <div classname="openbtn"><span /><span /><span /></div>
      </div>
      <nav>
        <ul classname="gnav">
          <li classname="has-child round_arrow dropdown"><link href="/service/" /><a href="#">Service</a>
            <ul>
              <li classname="dropdown-category round_arrow">Service</li>
              <li classname="dropdown-list"><link href="/service/" /><a href="#">サービス内容一覧</a></li>
              <li classname="dropdown-list"><link href="/service/web/" /><a href="#">ホームページ制作</a></li>
              <li classname="dropdown-list"><link href="/service/ec/" /><a href="#">ネットショップ構築</a></li>
              <li classname="dropdown-list"><link href="/service/movie/" /><a href="#">動画制作・写真撮影</a></li>
              <li classname="dropdown-list"><link href="/service/ia/" /><a href="#">情報設計</a></li>
              <li classname="dropdown-list"><link href="/service/writing/" /><a href="#">記事作成代行サービス</a></li>
            </ul>
          </li>
          <li><link href="/" /><a classname="round_arrow dropdown">Works</a></li>
          <li classname="has-child round_arrow dropdown"><link href="/about/" /><a href="#">About</a>
            <ul>
              <li classname="dropdown-category round_arrow">About</li>
              <li classname="dropdown-list"><link href="/about/" /><a href="#">会社概要</a></li>
              <li classname="dropdown-list"><link href="/about/topmessage/" /><a href="#">トップメッセージ</a></li>
            </ul>
          </li>
          <li classname="has-child round_arrow dropdown"><link href="/careers/" /><a href="#">Careers</a>
            <ul>
              <li classname="dropdown-category round_arrow">Careers</li>
              <li classname="dropdown-list"><link href="/careers/" /><a href="#">採用情報</a></li>
              <li classname="dropdown-list"><link href="/careers/entry/" /><a href="#">採用エントリー</a></li>
            </ul>
          </li>
          <li><link href="/contact/" /><a classname="round_arrow dropdown">Blog &amp; Topix</a></li>
          <li classname="nav-button"><button><link href="/contact/" /><a href="#">Contact</a></button></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  );
}
