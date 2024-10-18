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
}
