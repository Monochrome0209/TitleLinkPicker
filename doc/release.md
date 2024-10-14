# リリース運用

1. [ブランチ運用](./branch.md#releasexyzブランチ)を参考に、release/x.y.zブランチを作成
2. 作成されたリリースブランチからmainブランチへ向けてPullRequestを作成
3. PullRequestをマージ
4. [リリースノートページ](https://github.com/Monochrome0209/TitleLinkPicker/releases)へ移動
5. [新しいリリースノートを作成するページ](https://github.com/Monochrome0209/TitleLinkPicker/releases/new)へ繊維
6. 「Choose a tag」はrelease/x.y.zからvx.y.zを作成
7. 「Target: main」へ設定
8. 「Generate release notes」ボタンを押下
9. 自動生成されたリリースノートに不備がないことを確認
10. 下部の「Set as pre-release」にチェックが入っていないことを確認
11. 下部の「Set as the latest release」にチェックが入っていることを確認
12. 「Publish release」ボタンを押下