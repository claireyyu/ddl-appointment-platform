import React from 'react';

export default function BaziResult({ result }) {
  const jsonResult = JSON.parse(result);

  const { name, gongli } = jsonResult.debug;
  const { nianzhu, yuezhu, rizhu, shizhu, personality_description } = jsonResult;

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
    <div className="flex flex-col p-4 text-slate-900 bg-white w-full text-center">
      <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-8 my-4 justify-center">
        <p className="w-full sm:w-auto">Name: {name}</p>
        <p className="w-full sm:w-auto">Birthday: {birthYear}/{birthMonth}/{birthDay}</p>
        <p className="w-full sm:w-auto">Time: {birthHour}:{birthMinute}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2"></th>
              <th className="border-b py-2">Year Pillar</th>
              <th className="border-b py-2">Month Pillar</th>
              <th className="border-b py-2">Day Pillar</th>
              <th className="border-b py-2">Hour Pillar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t py-2">Stem</td>
              <td className="border-t py-2">{yearStem}</td>
              <td className="border-t py-2">{monthStem}</td>
              <td className="border-t py-2">{dayStem}</td>
              <td className="border-t py-2">{hourStem}</td>
            </tr>
            <tr>
              <td className="border-t py-2">Branch</td>
              <td className="border-t py-2">{yearBranch}</td>
              <td className="border-t py-2">{monthBranch}</td>
              <td className="border-t py-2">{dayBranch}</td>
              <td className="border-t py-2">{hourBranch}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-6">
        <p className="text-left md:text-center">Bazi Interpretation: {personality_description}</p>
      </div>
    </div>
  );
}

