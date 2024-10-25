import styles from './ResultLiupan.module.css';
import { useState, useContext, useEffect } from 'react';
import DayunNianzhuHelper from '../../utils/DayunNianzhuHelper';
import { type BaziPaipanProps } from '../../types/paipan';
import { BaziContext } from '../../contexts/BaziContext';

export function BaziLiupan( {yearStem, yearBranch, monthStem, monthBranch, dayStem, dayBranch, hourStem, hourBranch}: BaziPaipanProps) {
  const { selectedDayunGanzhi, selectedLiunianGanzhi, selectedLiuyueGanzhi, dayunNianzhuArray } = useContext(BaziContext);

  return (
    <div className="flex flex-col items-center">
      {/* Bazi Content */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-8 p-2 mx-4 bg-foreground">
        <div className={styles.pillarHeaderText}></div>
        <div className={styles.pillarHeaderText}>Year<br />Pillar</div>
        <div className={styles.pillarHeaderText}>Month<br />Pillar</div>
        <div className={styles.pillarHeaderText}>Day<br />Pillar</div>
        <div className={styles.pillarHeaderText}>Hour<br />Pillar</div>
        <div className={styles.pillarHeaderText}>Decade<br />Cycle</div>
        <div className={styles.pillarHeaderText}>Yearly<br />Cycle</div>
        <div className={styles.pillarHeaderText}>Monthly<br />Cycle</div>

        <div className={styles.pillarText}>Top<br />Stem</div>
        <div className={styles.pillarText}>{yearStem}</div>
        <div className={styles.pillarText}>{monthStem}</div>
        <div className={styles.pillarText}>{dayStem}</div>
        <div className={styles.pillarText}>{hourStem}</div>
        <div className={styles.pillarTextLBorder}>{selectedDayunGanzhi[0]}</div>
        <div className={styles.pillarText}>{selectedLiunianGanzhi[0]}</div>
        <div className={styles.pillarText}>{selectedLiuyueGanzhi[0]}</div>

        <div className={styles.pillarText}>Bottom<br />Branch</div>
        <div className={styles.pillarText}>{yearBranch}</div>
        <div className={styles.pillarText}>{monthBranch}</div>
        <div className={styles.pillarText}>{dayBranch}</div>
        <div className={styles.pillarText}>{hourBranch}</div>
        <div className={styles.pillarTextLBorder}>{selectedDayunGanzhi[1]}</div>
        <div className={styles.pillarText}>{selectedLiunianGanzhi[1]}</div>
        <div className={styles.pillarText}>{selectedLiuyueGanzhi[1]}</div>
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
  const [selectedLiuyue, setSelectedLiuyue] = useState(0);

  const { selectedDayunGanzhi, setSelectedDayunGanzhi, selectedLiunianGanzhi, setSelectedLiunianGanzhi, selectedLiuyueGanzhi, setSelectedLiuyueGanzhi, dayunNianzhuArray, setDayunNianzhuArray} = useContext(BaziContext);

  const jiaoyunYear = jiaoyun.split('年')[0];
  const jiaoyunMonth = jiaoyun.split('年')[1].split('月')[0];
  const jiaoyunDay = jiaoyun.split('年')[1].split('月')[1].split('日')[0];

  const dayunNianzhuObj = JSON.parse(dayunNianzhu);
  const dayunNianzhuArr = DayunNianzhuHelper(dayunNianzhuObj);

  useEffect(() => {
    setSelectedDayunGanzhi(dayunGanZhi[selectedDayun]);
    setSelectedLiunianGanzhi(dayunNianzhuArr[selectedDayun][selectedLiunian]);
    setSelectedLiuyueGanzhi(baziLiuyue[selectedDayun][selectedLiunian][selectedLiuyue]);
  }, [selectedDayun, selectedLiunian, selectedLiuyue]);

  const liunianDates = [
    'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.', 'Jan.'
  ]

  const handleClickDayun = (index: number) => {
    console.log('clicked dayun', index);
    setSelectedDayun(index);
  };

  const handleClickLiunian = (index: number) => {
    console.log('clicked liunian', index);
    setSelectedLiunian(index);
  }

  const handleClickLiuyue = (index: number) => {
    console.log('clicked liuyue', index);
    setSelectedLiuyue(index);
  }

  return (
    <div className="grid grid-cols-6 gap-4">

        <div className="col-span-1 flex items-center">
          <p>Decade Cycle starts on {jiaoyunYear}-{jiaoyunMonth}-{jiaoyunDay}</p>
        </div>
        <div className="col-span-5 flex items-center justify-start">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-8 p-2 bg-foreground rounded-custom-lg">
          {dayunAge.map((age: number, index: number) => (
            <button
              key={index}
              className={`flex flex-col items-center hover:bg-tbSelected ${selectedDayun === index ? 'bg-tbSelected' : ''}`}
              onClick={() => handleClickDayun(index)}
            >
              {/* Header Section */}
              <div className="w-full bg-tbHeader text-center mx-4 py-2">
                <p>Age {age}</p>
                <p>{dayunStart[index]}</p>
              </div>
            
              {/* Data Section */}
              <div className="w-full p-2 text-center">
                <p>{dayunGanZhi[index][0]}</p>
                <p>{dayunGanZhi[index][1]}</p>
              </div>
            </button>
              ))}
          </div>
      </div>
      
      <div className="col-span-1 flex items-center justify-center">
        <p>Yearly Cycle</p>
      </div>
      <div className="col-span-5 flex items-center justify-start">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-10 p-2 bg-foreground rounded-custom-lg">
          {dayunNianzhuArr[selectedDayun].map((group: string[], index: number) => (
            <button
            key={index}
            className={`flex flex-col items-center hover:bg-tbSelected ${selectedLiunian === index ? 'bg-tbSelected' : ''}`}
            onClick={() => handleClickLiunian(index)}
            >
              {/* Header Section */}
              <div className="w-full bg-tbHeader text-center mx-6 py-2">
                <p>Age</p>
                <p>{dayunAge[selectedDayun] + index}</p>
              </div>

              {/* Data Section */}
              <div className="w-full p-2 text-center">
                <p>{group[0]}</p>
                <p>{group[1]}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="col-span-1 flex items-center justify-center">
          <p>Monthly Cycle</p>
        </div>
        <div className="col-span-5 flex items-center justify-center">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-12 p-2 bg-foreground rounded-custom-lg">
            {baziLiuyue[selectedDayun][selectedLiunian].map((group: string[], index: number) => (
              <button
              key={index}
              className={`flex flex-col items-center hover:bg-tbSelected ${selectedLiuyue === index ? 'bg-tbSelected' : ''}`}
              onClick={() => handleClickLiuyue(index)}
              >
                {/* Header Section */}
                <div className="w-full bg-tbHeader text-center mx-6 py-2">
                  <p>{liunianDates[index]}</p>
                </div>

                {/* Data Section */}
                <div className="w-full p-2 text-center">
                  <p>{group[0]}</p>
                  <p>{group[1]}</p>
                </div>
              </button>
            ))}
          </div>
      </div>
    </div>
  );
}
