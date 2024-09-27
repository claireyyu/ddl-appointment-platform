import React from 'react';

export default function BaziResult({ result }) {
  const jsonResult = JSON.parse(result);

  const { name, gongli } = jsonResult.debug;
  const { nianzhu, yuezhu, rizhu, shizhu, personality_detail, rizhu_detail } = jsonResult;

  // extract birth year, month, day, hour, and minute from gongli
  const birthYear = gongli.split('年')[0];
  const birthMonth = gongli.split('年')[1].split('月')[0];
  const birthDay = gongli.split('年')[1].split('月')[1].split('日')[0];
  const birthHour = gongli.split('年')[1].split('月')[1].split('日')[1].split('时')[0];
  const birthMinute = gongli.split('年')[1].split('月')[1].split('日')[1].split('时')[1].split('分')[0];

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
            <p className="w-full md:w-auto">Time: {birthHour}:{birthMinute}</p>
          </div>
          <div className="flex justify-end text-xl border-2 border-foreground p-2 mt-4 md:mt-0">
            <p>Lab 8</p>
          </div>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2"></th>
              <th className="border-b py-2">Year<br/>Pillar</th>
              <th className="border-b py-2">Month<br/>Pillar</th>
              <th className="border-b py-2">Day<br/>Pillar</th>
              <th className="border-b py-2">Hour<br/>Pillar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t py-2">Top Stem</td>
              <td className="border-t py-2">{yearStem}</td>
              <td className="border-t py-2">{monthStem}</td>
              <td className="border-t py-2">{dayStem}</td>
              <td className="border-t py-2">{hourStem}</td>
            </tr>
            <tr>
              <td className="border-t py-2">Bottom Branch</td>
              <td className="border-t py-2">{yearBranch}</td>
              <td className="border-t py-2">{monthBranch}</td>
              <td className="border-t py-2">{dayBranch}</td>
              <td className="border-t py-2">{hourBranch}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-16">
        <p className="text-left">Rizhu Interpretation <br/><br/>{rizhu_detail}</p>
        <br/>
        <p className="text-left">Bazi Interpretation <br/><br/>{personality_detail}</p>
      </div>
    </div>
  );
  
}

