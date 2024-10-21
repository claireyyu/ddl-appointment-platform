import styles from './ResultLiupan.module.css';
import { useState } from 'react';
import DayunNianzhuHelper from '../../utils/DayunNianzhuHelper';
import {type BaziPaipanProps} from '../../types/paipan';

export function BaziLiupan( {yearStem, yearBranch, monthStem, monthBranch, dayStem, dayBranch, hourStem, hourBranch}: BaziPaipanProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Bazi Content */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 p-2 bg-foreground rounded-custom-lg shadow-card">
        <div className={styles.pillarText}></div>
        <div className={styles.pillarText}>Year Pillar</div>
        <div className={styles.pillarText}>Month Pillar</div>
        <div className={styles.pillarText}>Day Pillar</div>
        <div className={styles.pillarText}>Hour Pillar</div>

        <div className={styles.pillarText}>Top Stem</div>
        <div className={styles.pillarText}>{yearStem}</div>
        <div className={styles.pillarText}>{monthStem}</div>
        <div className={styles.pillarText}>{dayStem}</div>
        <div className={styles.pillarText}>{hourStem}</div>

        <div className={styles.pillarText}>Bottom Branch</div>
        <div className={styles.pillarText}>{yearBranch}</div>
        <div className={styles.pillarText}>{monthBranch}</div>
        <div className={styles.pillarText}>{dayBranch}</div>
        <div className={styles.pillarText}>{hourBranch}</div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col">
        <p className={styles.mobilePillarText}>Year Pillar </p>
        <p>Top Stem - {yearStem}<br />Bottom Branch - {yearBranch}</p>
        <p className={styles.mobilePillarText}>Month Pillar </p>
        <p>Top Stem - {monthStem}<br />Bottom Branch - {monthBranch}</p>
        <p className={styles.mobilePillarText}>Day Pillar </p>
        <p>Top Stem - {dayStem}<br />Bottom Branch - {dayBranch}</p>
        <p className={styles.mobilePillarText}>Hour Pillar </p>
        <p>Top Stem - {hourStem}<br />Bottom Branch - {hourBranch}</p>
      </div>
    </div>
  );
}

export function BaziDayun({ jiaoyun, dayunGanZhi, dayunAge, dayunStart, dayunNianzhu, baziLiuyue }) {

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

      <div>
        <p>{baziLiuyue}</p>
      </div>
    </div>
  );
}
