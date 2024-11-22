'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { type BaziResultData, type BaziPublicResultData } from '../../../types/bazi';
import ResultHeader from '../../../components/ResultHeader/ResultHeader';
import { BaziPaipan, BaziDetail } from '../../../components/ResultPaipan/ResultPaipan';
import { BaziLiupan, BaziDayun } from '../../../components/ResultLiupan/ResultLiupan';
import ResultButtons from '../../../components/ResultButtons/ResultButtons';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthContextType } from '../../../types/auth';
import { getBaziResult } from '../../../services/resultService';
import WuxingCard from '../../../components/WuxingCard/WuxingCard';

export default function ResultPage() {
  const { token } = useAuth() as AuthContextType;
  const [activeTab, setActiveTab] = useState('bazi'); // New state to manage active tab
  const [isModalOpen, setIsModalOpen] = useState(true);
  function handleCloseModal() {
    setIsModalOpen(false);
  }


  const searchParams = useSearchParams();
  const router = useRouter();
  const resultId = searchParams.get('id');
  const isAuthenticated = searchParams.get('auth') === '1';
  const [fetchedResult, setFetchedResult] = useState<BaziPublicResultData | null>(null);

  useEffect(() => {
    if (!resultId) {
      return;
    }

    // Fetch result only if not loading and token is available (for authenticated)
    if ((isAuthenticated ? token : true)) {
      try {
        getBaziResult(isAuthenticated, token, resultId).then((data) => {
          setFetchedResult(data);
          // router.replace(window.location.pathname);
        }
        );
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }, [resultId, isAuthenticated, token]);

  // for debugging
  if (!fetchedResult) {
    return <div>Loading...</div>;
  }

  const name = fetchedResult.name.toString();
  const birthYear: string = fetchedResult.birth_year.toString();
  const birthMonth: string = fetchedResult.birth_month.toString();
  const birthDay: string = fetchedResult.birth_day.toString();
  const birthHour: string = fetchedResult.birth_hour.toString();
  const birthMinute: string = fetchedResult.birth_minute.toString() === '0' ? '00' : fetchedResult.birth_minute.toString();

  const result: BaziResultData = fetchedResult.result;

  // convert local date to lunar date
  const { Lunar, Solar } = require('lunar-javascript');
  const solar = Solar.fromYmd(birthYear, birthMonth, birthDay);
  const lunar = solar.getLunar();
  const lunarYear = lunar.getYear();
  const lunarMonth = lunar.getMonth();
  const lunarDay = lunar.getDay();

  // get the result from the query string
  const { baziSizhu, baziDayun, baziCesuan, baziLiuyue } = result;

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
    <div className="flex flex-col text-center rounded-3xl bg-foreground text-background">
      <ResultHeader name={name} birthYear={birthYear} birthMonth={birthMonth} birthDay={birthDay} birthHour={birthHour} birthMinute={birthMinute} lunarYear={lunarYear} lunarMonth={lunarMonth} lunarDay={lunarDay} />

      <div className="flex items-center justify-center md:grid grid-cols-6">
        <div className="hidden col-span-1 my-8 xl:flex flex-col items-stretch space-y-4 ml-8">
          <ResultButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="col-span-6 xl:col-span-5 my-8 mr-4">
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
            />
          ) : (
            <BaziLiupan
              yearStem={yearStem}
              yearBranch={yearBranch}
              monthStem={monthStem}
              monthBranch={monthBranch}
              dayStem={dayStem}
              dayBranch={dayBranch}
              hourStem={hourStem}
              hourBranch={hourBranch}
            />
          )}
        </div>
      </div>

      <div className="mt-8">
        {activeTab === 'bazi' ? (
          <div className="mx-8 my-4">
            <BaziDetail rizhu_detail={rizhu_detail} personality_detail={personality_detail} />
          </div>
        ) : (
          <div className="mx-8 my-4">
            <BaziDayun jiaoyun={jiaoyun} dayunGanZhi={dayunGanZhi.slice(0, 8)} dayunAge={dayunAge.slice(0, 8)} dayunStart={dayunStart.slice(0, 8)} dayunNianzhu={JSON.stringify(dayunNianzhu)} baziLiuyue={baziLiuyue} />
          </div>
        )}
      </div>
      <WuxingCard isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
