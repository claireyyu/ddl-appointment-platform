'use client'

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { type BaziResultData } from '../../types/bazi';
import styles from './ResultPage.module.css';
import ResultHeader from '../../components/ResultHeader/ResultHeader';
import BaziPaipan from '../../components/BaziPaipan/BaziPaipan';
import BaziDayun from '../../components/BaziDayun/BaziDayun';

export default function ResultPage() {
  const [activeTab, setActiveTab] = useState('bazi'); // New state to manage active tab

  const searchParams = useSearchParams();

  // get local date and time
  const name = searchParams.get('inputName');
  const birthYear = searchParams.get('birthLocalYear');
  const birthMonth = searchParams.get('birthLocalMonth');
  const birthDay = searchParams.get('birthLocalDay');
  const birthHour = searchParams.get('birthLocalHour');
  const birthMinute = searchParams.get('birthLocalMinute');

  // convert local date to lunar date
  const { Lunar, Solar } = require('lunar-javascript');
  const solar = Solar.fromYmd(birthYear, birthMonth, birthDay);
  const lunar = solar.getLunar();
  const lunarYear = lunar.getYear();
  const lunarMonth = lunar.getMonth();
  const lunarDay = lunar.getDay();

  // get the result from the query string
  const result = searchParams.get('result');
  const jsonResult: BaziResultData = JSON.parse(result || '');
  const { baziSizhu, baziDayun, baziCesuan } = jsonResult;

  // extract the bazi sizhu and bazi cesuan
  const { nianzhu, yuezhu, rizhu, shizhu } = baziSizhu;
  const { jiaoyun, dayunGanZhi, dayunAge, dayunStart, dayunNianzhu } = baziDayun;
  const { rizhu_detail, personality_detail } = baziCesuan;

  // extract the stem and branch for each pillar
  const yearStem = nianzhu[0];
  const yearBranch = nianzhu[1];
  const monthStem = yuezhu[0];
  const monthBranch = yuezhu[1];
  const dayStem = rizhu[0];
  const dayBranch = rizhu[1];
  const hourStem = shizhu[0];
  const hourBranch = shizhu[1];

  return (
    <div className="flex flex-col items-center text-center rounded-3xl bg-foreground text-background">
      {/* Result Header */}
      <ResultHeader name={name} birthYear={birthYear} birthMonth={birthMonth} birthDay={birthDay} birthHour={birthHour} birthMinute={birthMinute} lunarYear={lunarYear} lunarMonth={lunarMonth} lunarDay={lunarDay} />

      {/* Buttons to Toggle Content */}
      <div className="flex mt-4 space-x-4">
        <button
          className={`px-6 py-2 rounded-custom shadow-button ${activeTab === 'bazi' ? 'bg-gradient-to-r from-bStart to-bEnd text-foreground' : 'bg-foreground text-black'}`}
          onClick={() => setActiveTab('bazi')}
        >
          Bazi
        </button>
        <button
          className={`px-3 py-2 rounded-custom shadow-button ${activeTab === 'liupan' ? 'bg-gradient-to-r from-bStart to-bEnd text-foreground' : 'bg-foreground text-black'}`}
          onClick={() => setActiveTab('liupan')}
        >
          Liupan
        </button>
      </div>

      {/* Toggle Content Based on Active Tab */}
      <div className="mt-8">
        {activeTab === 'bazi' ? (
          <BaziPaipan
            yearStem={yearStem}
            yearBranch={yearBranch}
            monthStem={monthStem}
            monthBranch={monthBranch}
            dayStem={dayStem}
            dayBranch={dayBranch}
            hourStem={hourStem}
            hourBranch={hourBranch}
            rizhu_detail={rizhu_detail}
            personality_detail={personality_detail} />
        ) : (
          <div>
              <BaziDayun jiaoyun={jiaoyun} dayunGanZhi={dayunGanZhi.slice(0, 8)} dayunAge={dayunAge.slice(0, 8)} dayunStart={dayunStart.slice(0, 8)} dayunNianzhu={JSON.stringify(dayunNianzhu)} />
          </div>
        )}
      </div>
    </div>
  );
}
