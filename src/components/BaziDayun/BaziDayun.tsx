import styles from './BaziDayun.module.css';
import { useState } from 'react';
import DayunNianzhuHelper from '../../utils/DayunNianzhuHelper';

export default function BaziDayun({ jiaoyun, dayunGanZhi, dayunAge, dayunStart, dayunNianzhu }) {

  const [selectedDayun, setSelectedDayun] = useState(0);
  const [selectedLiunian, setSelectedLiunian] = useState(0);

  const handleClickDayun = (index: number) => {
    console.log('clicked', index);
    setSelectedDayun(index);
  };

  const handleClickLiunian = (index: number) => {
    console.log('clicked', index);
    setSelectedLiunian(index);
  }

  const jiaoyunYear = jiaoyun.split('年')[0];
  const jiaoyunMonth = jiaoyun.split('年')[1].split('月')[0];
  const jiaoyunDay = jiaoyun.split('年')[1].split('月')[1].split('日')[0];

  const dayunNianzhuObj = JSON.parse(dayunNianzhu);
  const dayunNianzhuArr = DayunNianzhuHelper(dayunNianzhuObj);


  return (
    <div className="flex flex-col items-center w-full gap-4">
      {/* 交运年 */}
      <div className="flex flex-col items-center">
        <p>Decade Cycle starts on {jiaoyunYear}-{jiaoyunMonth}-{jiaoyunDay}</p>
      </div>

      {/* 大运 */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-8 gap-2 p-2 bg-foreground rounded-custom-lg shadow-card mb-8">
        {dayunAge.map((age: number, index: number) => (
          <button key={index} className={`flex flex-col items-center p-4 hover:bg-slate-100 ${selectedDayun === index ? 'bg-slate-100' : ''}`}  onClick={() => handleClickDayun(index)}>
            <p>Age: {age}</p>
            <p>{dayunStart[index]}</p>
            <p>{dayunGanZhi[index][0]}</p>
            <p>{dayunGanZhi[index][1]}</p>
          </button>
        ))}
      </div>

      {/* 流年 */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-10 gap-2 p-2 bg-foreground rounded-custom-lg shadow-card">
        {dayunNianzhuArr[selectedDayun].map((group: string[], index: number) => (
          <button key={index} className={`flex flex-col items-center p-4 hover:bg-slate-100 ${selectedLiunian === index ? 'bg-slate-100' : ''}`}  onClick={() => handleClickLiunian(index)}>
            <p>Age: {dayunAge[selectedDayun] + index}</p>
            <p>{group[0]}</p>
            <p>{group[1]}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
