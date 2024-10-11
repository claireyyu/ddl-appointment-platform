// Define types for form data
export interface FormData {
  name: string;
  sex: string;
  birthDate: string;
  birthTime: string;
  timezone: string;
}

export interface BaziRequestData {
  name: string;
  sex: string;
  type?: number;
  year: number;
  month: number;
  day: number;
  hours: number;
  minute: number;
}

export interface BaziApiResponse {
  original: {
    nianzhu: [string, string];
    yuezhu: [string, string];
    rizhu: [string, string];
    shizhu: [string, string];
    big_start_year: number | null;
    personality_detail: string;
    rizhu_detail: string;
  };
}

export interface BaziResultData {
  nianzhu: [string, string];
  yuezhu: [string, string];
  rizhu: [string, string];
  shizhu: [string, string];
  personality_detail: string;
  rizhu_detail: string;
}
