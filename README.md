# TitleLinkPicker

このChrome拡張機能は、ワンクリックで現在閲覧中のウェブサイトのタイトルと`URL`をクリップボードにコピーすることができます。

拡張機能のアイコンをクリックすると、ページのタイトルと`URL`が自動的にクリップボードにコピーされ、コピー完了の確認メッセージがアラートで表示されます。

## ✨️ Features

- 現在のページの`Title`をコピー
- 現在のページの`URL`をコピー
- シンプルなインターフェース（アイコンの押下のみで追加の操作不要）
- クリップボードにコピー後、アラートメッセージを表示

## ⚙️ Install

1. このリポジトリをクローンまたはダウンロードします。
2. Google Chromeを開き、`chrome://extensions/`にアクセスします。
3. 右上の「デベロッパーモード」を有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、この拡張機能のファイルが入ったフォルダを選択します。
5. 拡張機能のアイコンがツールバーに表示されます。

## 🚀 How To Use

1. 任意のウェブサイトにアクセスします。
2. Chromeのツールバーに表示された拡張機能のアイコンをクリックします。
3. 現在のタブのタイトルとURLがクリップボードにコピーされます。
4. コピーが成功すると、確認メッセージがアラートで表示されます。

## 📂Files

### `manifest.json`

拡張機能の権限や背景スクリプトの設定が記述されています。

### `background.js`

拡張機能のアイコンがクリックされたときに、タイトルとURLをクリップボードにコピーする機能を実装しています。

## 💡 Example

以下のようにコピーされます。

```markdown
[${ページタイトル}](${URL})
```

## 🔐 Permissions

- `activeTab`: 現在アクティブなタブにアクセスする権限。
- `scripting`: アクティブタブにスクリプトを注入し、タイトルやURLを取得するための権限。
- `clipboardWrite`: ユーザーのクリップボードにデータを書き込む権限。
