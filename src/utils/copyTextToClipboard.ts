export const copyTextToClipboard = async (text: string) => {
  if ('clipboard' in window.navigator) {
    window.navigator.clipboard.writeText(text);
  }

  window.document.execCommand('copy', true, text);
};
