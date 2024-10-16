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
  nianzhu: [string, string];
  yuezhu: [string, string];
  rizhu: [string, string];
  shizhu: [string, string];
  personality_detail: string;
  rizhu_detail: string;
}
