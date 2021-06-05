export type AnswerType = 'GAGE' | 'PRESET';
export type OmitAnswerInId = Omit<AnswerModel, 'id'>;
export interface AnswerModel {
  id: number;
  answerType: AnswerType;
  sequence: number;
  bias: string;
  weight: number;
}
export interface PresetModel {
  label: string;
  weight: number;
  bias: string; // NOTE: to enum
  sequence: number;
}

export interface QuestionModel {
  id: number;
  title: string;
  answerType: AnswerType;
  presets: PresetModel[];
}

export default [
  {
    id: 1,
    title: 'Front vs Back',
    answerType: 'PRESET',
    presets: [
      {
        label: 'FFFFFF',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'BBBBBB',
        bias: 'B',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 2,
    title: 'Front vs Back',
    answerType: 'PRESET',
    presets: [
      {
        label: 'FFFFFF',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'BBBBBB',
        bias: 'B',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 3,
    title: 'Front vs Back',
    answerType: 'PRESET',
    presets: [
      {
        label: 'FFFFFF',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'BBBBBB',
        bias: 'B',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 4,
    title: 'Front vs Back',
    answerType: 'PRESET',
    presets: [
      {
        label: 'FFFFFF',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'BBBBBB',
        bias: 'B',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 5,
    title: 'Front vs Back',
    answerType: 'PRESET',
    presets: [
      {
        label: 'FFFFFF',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'BBBBBB',
        bias: 'B',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 6,
    title: 'Startup vs Corporation',
    answerType: 'PRESET',
    presets: [
      {
        label: 'SSSSSS',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'CCCCCC',
        bias: 'C',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 7,
    title: 'Startup vs Corporation',
    answerType: 'PRESET',
    presets: [
      {
        label: 'SSSSSS',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'CCCCCC',
        bias: 'C',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 8,
    title: 'Startup vs Corporation',
    answerType: 'PRESET',
    presets: [
      {
        label: 'SSSSSS',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'CCCCCC',
        bias: 'C',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 9,
    title: 'Startup vs Corporation',
    answerType: 'PRESET',
    presets: [
      {
        label: 'SSSSSS',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'CCCCCC',
        bias: 'C',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 10,
    title: 'Startup vs Corporation',
    answerType: 'PRESET',
    presets: [
      {
        label: 'SSSSSS',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'CCCCCC',
        bias: 'C',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 11,
    title: 'Product vs Technology',
    answerType: 'PRESET',
    presets: [
      {
        label: 'PPPPPP',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'TTTTTT',
        bias: 'T',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 12,
    title: 'Product vs Technology',
    answerType: 'PRESET',
    presets: [
      {
        label: 'PPPPPP',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'TTTTTT',
        bias: 'T',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 13,
    title: 'Product vs Technology',
    answerType: 'PRESET',
    presets: [
      {
        label: 'PPPPPP',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'TTTTTT',
        bias: 'T',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 14,
    title: 'Product vs Technology',
    answerType: 'PRESET',
    presets: [
      {
        label: 'PPPPPP',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'TTTTTT',
        bias: 'T',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 15,
    title: 'Product vs Technology',
    answerType: 'PRESET',
    presets: [
      {
        label: 'PPPPPP',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'TTTTTT',
        bias: 'T',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 16,
    title: 'Work vs Life',
    answerType: 'PRESET',
    presets: [
      {
        label: 'WWWWWW',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'LLLLLL',
        bias: 'L',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 17,
    title: 'Work vs Life',
    answerType: 'PRESET',
    presets: [
      {
        label: 'WWWWWW',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'LLLLLL',
        bias: 'L',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 18,
    title: 'Work vs Life',
    answerType: 'PRESET',
    presets: [
      {
        label: 'WWWWWW',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'LLLLLL',
        bias: 'L',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 19,
    title: 'Work vs Life',
    answerType: 'PRESET',
    presets: [
      {
        label: 'WWWWWW',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'LLLLLL',
        bias: 'L',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 20,
    title: 'Work vs Life',
    answerType: 'PRESET',
    presets: [
      {
        label: 'WWWWWW',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: 'LLLLLL',
        bias: 'L',
        weight: 1,
        sequence: 1,
      },
    ],
  },
  {
    id: 21,
    title: 'Front vs Back',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'F',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'F',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'B',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'B',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 22,
    title: 'Front vs Back',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'F',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'B',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'B',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'B',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 23,
    title: 'Front vs Back',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'F',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'F',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'B',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'B',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 24,
    title: 'Front vs Back',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'F',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'F',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'B',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'B',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 25,
    title: 'Front vs Back',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'F',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'F',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'F',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'B',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'B',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 26,
    title: 'Startup vs Corporation',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'S',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'C',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'C',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'C',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 27,
    title: 'Startup vs Corporation',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'S',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'S',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'C',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'C',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 28,
    title: 'Startup vs Corporation',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'S',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'S',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'C',
        weight: 0,
        sequence: 3,
      },
      {
        label: '',
        bias: 'C',
        weight: 0.5,
        sequence: 4,
      },
      {
        label: '',
        bias: 'C',
        weight: 1,
        sequence: 5,
      },
    ],
  },
  {
    id: 29,
    title: 'Startup vs Corporation',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'S',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'S',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'C',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'C',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 30,
    title: 'Startup vs Corporation',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'S',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'S',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'S',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'C',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'C',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 31,
    title: 'Product vs Technology',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'P',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'P',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'T',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'T',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 32,
    title: 'Product vs Technology',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'P',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'P',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'T',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'T',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 33,
    title: 'Product vs Technology',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'P',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'P',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'T',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'T',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 34,
    title: 'Product vs Technology',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'P',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'P',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'T',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'T',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 35,
    title: 'Product vs Technology',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'P',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'P',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'P',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'T',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'T',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 36,
    title: 'Work vs Life',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'W',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'W',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'L',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'L',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 37,
    title: 'Work vs Life',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'W',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'W',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'L',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'L',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 38,
    title: 'Work vs Life',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'W',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'W',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'L',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'L',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 39,
    title: 'Work vs Life',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'W',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'W',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'L',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'L',
        weight: 1,
        sequence: 4,
      },
    ],
  },
  {
    id: 40,
    title: 'Work vs Life',
    answerType: 'GAGE',
    presets: [
      {
        label: '',
        bias: 'W',
        weight: 1,
        sequence: 0,
      },
      {
        label: '',
        bias: 'W',
        weight: 0.5,
        sequence: 1,
      },
      {
        label: '',
        bias: 'W',
        weight: 0,
        sequence: 2,
      },
      {
        label: '',
        bias: 'L',
        weight: 0.5,
        sequence: 3,
      },
      {
        label: '',
        bias: 'L',
        weight: 1,
        sequence: 4,
      },
    ],
  },
] as QuestionModel[];
