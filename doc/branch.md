# ブランチ運用

ブランチ運用はいかに示す図の通り。

```mermaid
%%{init: { 'theme': 'base' } }%%
gitGraph
  commit id: "Start Project"
  branch develop
  checkout develop
  commit id: "New Feature"
  branch feat
  checkout feat
  commit
  commit
  checkout develop
  commit id: "Bug Fix"
  branch fix
  checkout fix
  commit
  checkout develop
  merge fix
  checkout develop
  merge feat
  commit id: "Release Standby"
  branch release/X.Y.Z
  checkout release/X.Y.Z
  commit id: "CREATE PR release/X.Y.Z TO MAIN"
```

## mainブランチ

更新は`release/x.y.z`ブランチからのマージのみ。

_コミットもされないしプッシュもされない。_

## developブランチ

開発ブランチであり、デフォルトブランチ。

`hotfix`ブランチ以外はこのブランチからcheckoutする。

## featureブランチ

新機能開発など、機能を追加する際にcheckoutするブランチ。

`enhancement`ラベルを付与。

## fixブランチ

バグなどの修正を行う際にcheckoutするブランチ。

`bug`ラベルを付与。

## hotfixブランチ

リリースの際に発生したバグを修正するためなど、緊急修正用にmainからcheckoutするブランチ。

`bug`ラベルを付与。

## release/x.y.zブランチ

リリースの際にcheckoutするブランチ。

最新のdevelopから作成し、mainへマージする。

バージョニングは[セマンティックバージョニング](https://semver.org/lang/ja/)を使用する。
