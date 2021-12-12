const results = {
  all: ['result'] as const,
  summary: (filter: unknown) => [...results.all, filter] as const,
};

export default results;
