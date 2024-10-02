chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyTitleAndAlert,
  });
});

function pickTitleAndLink() {
  const pageTitle = document.title;
  const url = document.URL;

  // markdownのリンク形式として保存
  const markdownLink = `[${pageTitle}](${url})`;

  // クリップボードにコピー
  navigator.clipboard
    .writeText(markdownLink)
    .then(() => {
      // コピー成功後にアラートを表示
      alert("Title copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy title: ", err);
    });
}
