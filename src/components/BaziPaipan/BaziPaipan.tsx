import styles from './BaziPaipan.module.css'; 

interface BaziPaipanProps {
  yearStem: string;
  yearBranch: string;
  monthStem: string;
  monthBranch: string;
  dayStem: string;
  dayBranch: string;
  hourStem: string;
  hourBranch: string;
  rizhu_detail: string;
  personality_detail: string;
}

export default function BaziPaipan( {yearStem, yearBranch, monthStem, monthBranch, dayStem, dayBranch, hourStem, hourBranch, rizhu_detail, personality_detail}: BaziPaipanProps) {
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

    <div className="m-16">
      <p className="text-justify">Rizhu Interpretation <br/><br/>{rizhu_detail}</p>
      <br/>
      <p className="text-justify">Bazi Interpretation <br/><br/>{personality_detail}</p>
    </div>
    </div>
  );
}