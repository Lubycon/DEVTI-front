const replaceAll = (string: string, searchValue: string, replaceValue: string) => {
  const regExp = new RegExp(`${searchValue}`, 'g');
  return string.replace(regExp, replaceValue);
};

export default replaceAll;
