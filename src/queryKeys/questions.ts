const questionKeys = {
  all: ['questions'] as const,
  result: () => [...questionKeys.all, 'result'],
};

export default questionKeys;
