import { AppMeta } from "newt-client-js";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export function Footer({ app }: { app: AppMeta }) {
  return (
<footer>
  <div className="footer-inner">
    <div className="footer-top">
      <ul className="fnav">
        <li className="nav-button sp"><button><a href="/contact/">Contact</a></button></li>
        <li className="footer-logo"><img src="/assets/img/img-logo-02.png" alt="fiika inc." /></li>
        <li className="footer-arrow dropdown sp"><a href="/">Top page</a></li>
        <li className="has-child footer-arrow dropdown"><a>Service</a>
          <ul>
            <li className="dropdown-category footer-arrow">Service</li>
            <li className="dropdown-list"><a href="/service/">サービス内容一覧</a></li>
            <li className="dropdown-list"><a href="/service/web/">ホームページ制作</a></li>
            <li className="dropdown-list"><a href="/service/ec/">ネットショップ構築</a></li>
            <li className="dropdown-list"><a href="/service/movie/">動画制作・写真撮影</a></li>
            <li className="dropdown-list"><a href="/service/ia/">情報設計</a></li>
            <li className="dropdown-list"><a href="/service/writing/">記事作成代行サービス</a></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>Works</a>
          <ul>
            <li className="dropdown-category footer-arrow">Works</li>
            <li className="dropdown-list"><a href="/about/">制作実績・コンサルティング実績</a></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>About</a>
          <ul>
            <li className="dropdown-category footer-arrow">About</li>
            <li className="dropdown-list"><a href="/about/">会社概要</a></li>
            <li className="dropdown-list"><a href="/about/topmessage/">トップメッセージ</a></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>Careers</a>
          <ul>
            <li className="dropdown-category footer-arrow">Careers</li>
            <li className="dropdown-list"><a href="/careers">採用情報</a></li>
            <li className="dropdown-list"><a href="/careers/entry/">採用エントリー</a></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>Blog &amp; Topics</a>
          <ul>
            <li className="dropdown-category footer-arrow">Blog &amp; Topics</li>
            <li className="dropdown-list"><a href="/about/">ブログ＆トピックス一覧</a></li>
          </ul>
        </li>
        <li className="footer-arrow dropdown sp"><a href="/access/">Access Map</a></li>
        <li className="nav-button pc"><button><a href="/contact/">Contact</a></button></li>
      </ul>
    </div>
    <div className="footer-bottom">
      <p className="privacypolicy"><a href="/privacypolicy/">プライバシーポリシー</a></p>
      <p className="privacypolicy"><a href="/Security/">情報セキュリティ方針</a></p>
      <p className="copyright">©Fiika inc.</p>
    </div>
  </div>
</footer>

  );
}
