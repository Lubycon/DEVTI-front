const questions = {
  all: ['result'] as const,
  summary: (filter: unknown) => [...questions.all, filter] as const,
};

export default questions;
