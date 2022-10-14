import { AppMeta } from "newt-client-js";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export function Footer({ app }: { app: AppMeta }) {
  return (
<footer>
  <div className="footer-inner">
    <div className="footer-top">
      <ul className="fnav">
        <li className="nav-button sp"><button><Link href="https://fiika-inc.co.jp/contact/"><a>Contact</a></Link></button></li>
        <li className="footer-logo"><img src="/assets/img/img-logo-02.png" alt="fiika inc." /></li>
        <li className="footer-arrow dropdown sp"><Link href="https://fiika-inc.co.jp/"><a>Top page</a></Link></li>
        <li className="has-child footer-arrow dropdown"><a>Service</a>
          <ul>
            <li className="dropdown-category footer-arrow">Service</li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/"><a>サービス内容一覧</a></Link></li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/web/"><a>ホームページ制作</a></Link></li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/ia/"><a>UI/UX・情報設計</a></Link></li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/consulting/"><a>ウェブコンサルティング</a></Link></li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/service/writing/"><a>記事作成代行サービス</a></Link></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>Works</a>
          <ul>
            <li className="dropdown-category footer-arrow">Works</li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/blog/tag/works/"><a>制作実績・コンサルティング実績</a></Link></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>About</a>
          <ul>
            <li className="dropdown-category footer-arrow">About</li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/about/"><a>会社概要</a></Link></li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/about/topmessage/"><a>トップメッセージ</a></Link></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>Careers</a>
          <ul>
            <li className="dropdown-category footer-arrow">Careers</li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/careers/"><a>採用情報</a></Link></li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/careers/entry/"><a>採用エントリー</a></Link></li>
          </ul>
        </li>
        <li className="has-child footer-arrow dropdown"><a>Blog &amp; Topics</a>
          <ul>
            <li className="dropdown-category footer-arrow">Blog &amp; Topics</li>
            <li className="dropdown-list"><Link href="https://fiika-inc.co.jp/blog/"><a>ブログ＆トピックス一覧</a></Link></li>
          </ul>
        </li>
        <li className="footer-arrow dropdown sp"><Link href="https://fiika-inc.co.jp/access/"><a>Access Map</a></Link></li>
        <li className="nav-button pc"><button><Link href="https://fiika-inc.co.jp/contact/"><a>Contact</a></Link></button></li>
      </ul>
    </div>
    <div className="footer-bottom">
      <p className="privacypolicy">
      <Link href="https://fiika-inc.co.jp/privacypolicy/"><a style={{marginRight: '2rem'}}>プライバシーポリシー</a></Link>
      <Link href="https://fiika-inc.co.jp/Security/"><a>情報セキュリティ方針</a></Link></p>
      <p className="copyright">©Fiika inc.</p>
    </div>
  </div>

</footer>

  );
}
