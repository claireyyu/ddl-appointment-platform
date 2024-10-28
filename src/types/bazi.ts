// BaziCalculator.tsx
export interface FormData {
  name: string;
  sex: string;
  birthDate: string;
  birthTime: string;
  timezone: string;
}

// Baziformfields.tsx
export interface BaziFormFieldsProps {
  formData: FormData;
  timezones: { value: string; label: string }[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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

export interface BaziResultData {
  baziSizhu: { "nianzhu": string, "yuezhu": string, "rizhu": string, "shizhu": string };
  baziDayun: { "jiaoyun": string, "dayunGanZhi": string[], "dayunAge": number[], "dayunStart": number[], "dayunNianzhu": {"year_char": string}[][] };
  baziCesuan: { "personality_detail": string, "rizhu_detail": string };
  baziLiuyue: { "baziLiuyue": string[][]};
}

export interface BaziPublicResultData { 
  name: string;
  sex: string;
  birth_year: number;
  birth_month: number;
  birth_day: number;
  birth_hour: number;
  birth_minute: number;
  result: BaziResultData;
}

export interface BaziUserResultData { 
  id: number;
  name: string;
  sex: string;
  birth_year: number;
  birth_month: number;
  birth_day: number;
  birth_hour: number;
  birth_minute: number;
  result: BaziResultData;
}