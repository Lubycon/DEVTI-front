const doCopy = (text: string, callBack?: VoidFunction) => {
  const textarea = <HTMLTextAreaElement>document.createElement('textarea');
  textarea.value = text;
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.display = 'fixed';

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  callBack?.();
};

export default doCopy;
