import moment from 'moment-timezone';
import { TimezoneEntry, TimezoneData } from '../types/bazi';


const timezoneTranslations: Record<string, string> = {
  'Baker Island Time': '贝克岛时间',
  'Samoa Standard Time': '萨摩亚标准时间',
  'Hawaii-Aleutian Standard Time': '夏威夷-阿留申标准时间',
  'Alaska Standard Time': '阿拉斯加标准时间',
  'Pacific Standard Time': '太平洋标准时间',
  'Mountain Standard Time': '山地标准时间',
  'Central Standard Time': '中部标准时间',
  'Eastern Standard Time': '东部标准时间',
  'Atlantic Standard Time': '大西洋标准时间',
  'Argentina Time': '阿根廷时间',
  'South Georgia Time': '南乔治亚时间',
  'Azores Time': '亚速尔时间',
  'Greenwich Mean Time': '格林尼治标准时间',
  'Central European Time': '中欧时间',
  'Eastern European Time': '东欧时间',
  'Moscow Time': '莫斯科时间',
  'United Arab Emirates Standard Time': '阿联酋标准时间',
  'Pakistan Standard Time': '巴基斯坦标准时间',
  'Bangladesh Time': '孟加拉国时间',
  'Vietnam Time': '越南时间',
  'China Standard Time': '中国标准时间',
  'Japan Standard Time': '日本标准时间',
  'Australian Eastern Standard Time': '澳大利亚东部标准时间',
  'Solomon Islands Time': '所罗门群岛时间'
};

const majorTimezones: TimezoneEntry[] = [
  { label: 'Baker Island Time', value: 'Etc/GMT+12' },
  { label: 'Samoa Standard Time', value: 'Pacific/Pago_Pago' },
  { label: 'Hawaii-Aleutian Standard Time', value: 'Pacific/Honolulu' },
  { label: 'Alaska Standard Time', value: 'America/Anchorage' },
  { label: 'Pacific Standard Time', value: 'America/Los_Angeles' },
  { label: 'Mountain Standard Time', value: 'America/Denver' },
  { label: 'Central Standard Time', value: 'America/Chicago' },
  { label: 'Eastern Standard Time', value: 'America/New_York' },
  { label: 'Atlantic Standard Time', value: 'America/Halifax' },
  { label: 'Argentina Time', value: 'America/Argentina/Buenos_Aires' },
  { label: 'South Georgia Time', value: 'Atlantic/South_Georgia' },
  { label: 'Azores Time', value: 'Atlantic/Azores' },
  { label: 'Greenwich Mean Time', value: 'Etc/GMT' },
  { label: 'Central European Time', value: 'Europe/Berlin' },
  { label: 'Eastern European Time', value: 'Europe/Kiev' },
  { label: 'Moscow Time', value: 'Europe/Moscow' },
  { label: 'United Arab Emirates Standard Time', value: 'Asia/Dubai' },
  { label: 'Pakistan Standard Time', value: 'Asia/Karachi' },
  { label: 'Bangladesh Time', value: 'Asia/Dhaka' },
  { label: 'Vietnam Time', value: 'Asia/Bangkok' },
  { label: 'China Standard Time', value: 'Asia/Shanghai' },
  { label: 'Japan Standard Time', value: 'Asia/Tokyo' },
  { label: 'Australian Eastern Standard Time', value: 'Australia/Sydney' },
  { label: 'Solomon Islands Time', value: 'Pacific/Guadalcanal' }
];

// Generate list of major timezones with UTC offset
export const timezones: TimezoneData[] = [
  {
    language: 'en',
    data: majorTimezones.map((tz) => {
      const offset = moment.tz(tz.value).format('Z');
      return { label: `${tz.label} (UTC${offset})`, value: tz.value };
    })
  },
  {
    language: 'zh',
    data: majorTimezones.map((tz) => {
      const offset = moment.tz(tz.value).format('Z');
      const translatedLabel = timezoneTranslations[tz.label] || tz.label;
      return { label: `${translatedLabel} (UTC${offset})`, value: tz.value };
    })
  }
];
