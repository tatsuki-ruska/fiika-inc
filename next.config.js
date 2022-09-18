/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/nextapp";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production";

module.exports = {
  // 本番環境では SUB_DIRECTORY それ以外は空欄
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
};
