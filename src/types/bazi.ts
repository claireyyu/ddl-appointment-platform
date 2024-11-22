// BaziCalculator.tsx
export type FormData = {
  name: string;
  sex: string;
  birthDate: string;
  birthTime: string;
  timezone: string;
}

// Baziformfields.tsx
// Define the structure of a single timezone entry
export type TimezoneEntry = {
  label: string;
  value: string;
}

// Define the structure of the timezone data for a specific language
export type TimezoneData = {
  language: string;
  data: TimezoneEntry[];
}

export type BaziFormFieldsProps = {
  formData: FormData;
  timezones: TimezoneData[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export type BaziRequestData = {
  name: string;
  sex: string;
  type?: number;
  year: number;
  month: number;
  day: number;
  hours: number;
  minute: number;
}

export type BaziResultData = {
  baziSizhu: { "nianzhu": string, "yuezhu": string, "rizhu": string, "shizhu": string };
  baziDayun: { "jiaoyun": string, "dayunGanZhi": string[], "dayunAge": number[], "dayunStart": number[], "dayunNianzhu": {"year_char": string}[][] };
  baziCesuan: { "personality_detail": string, "rizhu_detail": string };
  baziLiuyue: { "baziLiuyue": string[][]};
}

export type BaziPublicResultData = { 
  name: string;
  sex: string;
  birth_year: number;
  birth_month: number;
  birth_day: number;
  birth_hour: number;
  birth_minute: number;
  result: BaziResultData;
}

export type BaziUserResultData = { 
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