import replaceAll from './replaceAll';

const parseNewlineCharactor = (string?: string) => {
  if (!string) return string;

  return replaceAll(string, '\\\\n', '\n');
};

export default parseNewlineCharactor;
