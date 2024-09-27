'use client'
 
import { useSearchParams } from 'next/navigation'

export default function BaziResult() {
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
  const jsonResult = JSON.parse(result);
  const { nianzhu, yuezhu, rizhu, shizhu, personality_detail, rizhu_detail } = jsonResult;

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
    <div className="flex flex-col items-center text-center rounded-3xl bg-foreground text-background m-8">
      <div className="flex w-full p-8 text-foreground bg-gradient-to-r from-bpStart to-bpEnd rounded-t-3xl items-center justify-between flex-wrap md:flex-nowrap">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
            <p className="w-full md:w-auto">Name: {name}</p>
            <p className="w-full md:w-auto">Birthday: {birthYear}/{birthMonth}/{birthDay}</p>
            <p className="w-full md:w-auto">Lunar Birthday: {lunarYear}/{lunarMonth}/{lunarDay}</p>
            <p className="w-full md:w-auto">Time: {birthHour}:{birthMinute}</p>
            <div className="md:hidden flex justify-center text-xl border-2 border-foreground p-2 mt-4 md:mt-0">
              <p>Lab 8</p>
            </div>
          </div>
          <div className="hidden md:flex md:justify-end text-xl border-2 border-foreground p-2 mt-4 md:mt-0">
            <p>Lab 8</p>
          </div>
      </div>
      <div className="overflow-x-auto mt-8">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 min-w-full gap-4 p-2">
          <div className="col-span-1 py-2"></div>
          <div className="col-span-1 py-2 text-center">Year<br/>Pillar</div>
          <div className="col-span-1 py-2 text-center">Month<br/>Pillar</div>
          <div className="col-span-1 py-2 text-center">Day<br/>Pillar</div>
          <div className="col-span-1 py-2 text-center">Hour<br/>Pillar</div>

          <div className="col-span-1 py-2">Top Stem</div>
          <div className="col-span-1 py-2">{yearStem}</div>
          <div className="col-span-1 py-2">{monthStem}</div>
          <div className="col-span-1 py-2">{dayStem}</div>
          <div className="col-span-1 py-2">{hourStem}</div>

          <div className="col-span-1 py-2">Bottom Branch</div>
          <div className="col-span-1 py-2">{yearBranch}</div>
          <div className="col-span-1 py-2">{monthBranch}</div>
          <div className="col-span-1 py-2">{dayBranch}</div>
          <div className="col-span-1 py-2">{hourBranch}</div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col">
          <p className="text-lg my-4">Year Pillar </p>
          <p>Top Stem - {yearStem}<br />Bottom Branch - {yearBranch}</p>
          <p className="text-lg my-4">Month Pillar </p>
          <p>Top Stem - {monthStem}<br />Bottom Branch - {monthBranch}</p>
          <p className="text-lg my-4">Day Pillar </p>
          <p>Top Stem - {dayStem}<br />Bottom Branch - {dayBranch}</p>
          <p className="text-lg my-4">Hour Pillar </p>
          <p>Top Stem - {hourStem}<br />Bottom Branch - {hourBranch}</p>
        </div>
      </div>
      <div className="m-16">
        <p className="text-justify">Rizhu Interpretation <br/><br/>{rizhu_detail}</p>
        <br/>
        <p className="text-justify">Bazi Interpretation <br/><br/>{personality_detail}</p>
      </div>
    </div>
  );
  
}

