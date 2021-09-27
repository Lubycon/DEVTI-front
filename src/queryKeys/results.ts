import { ResultSource } from '~models/DEVTI';

const questions = {
  all: ['result'] as const,
  summary: (filter: ResultSource) => [...questions.all, filter] as const,
};

export default questions;
