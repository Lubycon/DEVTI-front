export interface Question {
  id: number;
  title: string;
  answerType: AnswerType;
  presetList: Preset[];
}

export enum AnswerType {
  Gage = 'GAGE',
  Info = 'INFO',
  Preset = 'PRESET',
}

export interface Preset {
  key: number;
  label: string;
  bias: Bias;
  weight: number;
  sequence: number;
}

export enum Bias {
  A = 'A',
  C = 'C',
  Etc = 'ETC',
  L = 'L',
  P = 'P',
  S = 'S',
  T = 'T',
  V = 'V',
  W = 'W',
}

export type OmitAnswerInId = Omit<AnswerModel, 'id'>;

export interface AnswerModel {
  id: number;
  answerType: AnswerType;
  sequence: number;
  bias: Bias;
  weight: number;
}
export interface PresetModel {
  label: string;
  weight: number;
  bias: Bias;
  sequence: number;
}

export interface QuestionResult {
  result: { P: number; C: number; W: number; S: number; A: number; V: number; L: number; T: number; job: 'F' | 'B' };
}

export interface QueryResult {
  P: string;
  C: string;
  W: string;
  S: string;
  A: string;
  V: string;
  L: string;
  T: string;
  job: string;
}
