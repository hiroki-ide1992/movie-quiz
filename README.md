# webpack 必要パッケージ


## webpack本体
``````````````````````
npm i -D webpack@4.43.0 webpack-cli@3.3.11
``````````````````````

## webpack Merge
``````````````````````
npm i -D webpack-merge@5.0.9

バンドルを本番用、開発用、共通用とで分けるためのプラグイン
``````````````````````

## Terse webpack
``````````````````````
npm i -D terser-webpack-plugin@3.0.8

コンソールログを削除したり、ファイルを圧縮するためのプラグイン
``````````````````````

## Clean webpack
``````````````````````
npm i -D clean-webpack-plugin@3.0.0

ビルドごとに古いファイルを削除する
``````````````````````

## HTML webpack
``````````````````````
npm i -D html-webpack-plugin@4.3.0

HTMLを出力するためのプラグイン。outputで指定されているjsファイルが自動で挿入される
``````````````````````

## webpack Server
``````````````````````
npm i -D webpack-dev-server@3.11.0

ライブサーバーを利用するためのプラグイン
``````````````````````

## babel
``````````````````````
npm i -D babel-loader@8.1.0 @babel/core@7.10.5 @babel/preset-env@7.10.4

jsを昔のブラウザに対応させるためのプラグイン
``````````````````````

## ポリフィル
``````````````````````
npm i -S core-js@3.6.5 regenerator-runtime@0.13.7

jsを昔のブラウザに対応させるためのプラグイン
``````````````````````

## SCSS
``````````````````````
npm i -D sass-loader@8.0.2 node-sass@4.14.1 css-loader@3.5.3

SCSSを利用するためのパッケージ
``````````````````````

## mini-css-extract-plugin
``````````````````````
npm i -D mini-css-extract-plugin@0.9.0

バンドルされるstyleを個別のCSSファイルとして出力
``````````````````````

## post-css
``````````````````````
npm i -D postcss-loader@3.0.0 autoprefixer@9.8.5
``````````````````````


## optimize-css-assets-webpack-plugin
``````````````````````
npm i -D optimize-css-assets-webpack-plugin@5.0.3

CSSの最適化(mini、記述)を行って出力する。(Terse webpackとの併用が必須)
``````````````````````

## css-mqpacker
``````````````````````
npm i -D css-mqpacker@7.0.0

メディアクエリを一つにまとめるためのプラグイン
``````````````````````

## import-glob-loader
``````````````````````
npm i -D import-glob-loader@1.1.0

import文でワイルドカードを利用するためのプラグイン
``````````````````````

## file-loader
``````````````````````
npm i -D file-loader@6.0.0

CSSに記述されている画像のパスをバンドル時に書きかえる
``````````````````````

## html-loader
``````````````````````
npm i -D html-loader@1.1.0

HTMLに記述されている画像のパスをバンドル時に書きかえる
``````````````````````


## jQuery
``````````````````````
npm i -S jquery@3.5.1
``````````````````````