export interface Question {
  id: number;
  title: string;
  answerType: AnswerType;
  presets: Preset[];
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

export interface QuestionModel {
  id: number;
  title: string;
  answerType: AnswerType;
  presets: PresetModel[];
}
