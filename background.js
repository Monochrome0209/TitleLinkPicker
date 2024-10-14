/**
 * Scriptを実行するタブを現在開いているタブを指定
 */
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: pickTitleAndLink,
  });
});

/**
 * 開いているタブのURLをコピーし、Markdown形式で保存する
 * [{Web Title}](Web URL)
 */
function pickTitleAndLink() {
  const pageTitle = document.title;
  const url = document.URL;

  // markdownのリンク形式として保存
  const markdownLink = `[${pageTitle}](${url})`;

  // クリップボードにコピー
  navigator.clipboard
    .writeText(markdownLink)
    .then(() => {
      // 通知用の要素を作成
      const notification = document.createElement("div");
      notification.style.position = "fixed";
      notification.style.bottom = "10px";
      notification.style.right = "10px";
      notification.style.padding = "10px";
      notification.style.backgroundColor = "black";
      notification.style.color = "white";
      notification.style.borderRadius = "5px";
      notification.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      notification.style.zIndex = "10000";
      notification.innerText = "タイトルとURLをコピーしました！";

      // 通知クリックでタイトルとリンクを表示
      notification.addEventListener("click", () => {
        alert(`Copied Title: ${pageTitle}\nCopied link: ${url}`);
      });

      // ページに通知を追加
      document.body.appendChild(notification);

      // 5秒後に通知を自動的に削除
      setTimeout(() => {
        notification.remove();
      }, 5000);
    })
    .catch((err) => {
      console.error("Failed to copy title and url: ", err);
    });
}
