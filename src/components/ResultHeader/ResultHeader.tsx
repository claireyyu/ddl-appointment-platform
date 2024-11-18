interface ResultHeaderProps {
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  lunarYear: string;
  lunarMonth: string;
  lunarDay: string;
  birthHour: string;
  birthMinute: string;
}

export default function ResultHeader({
  name,
  birthYear,
  birthMonth,
  birthDay,
  lunarYear,
  lunarMonth,
  lunarDay,
  birthHour,
  birthMinute,
}: ResultHeaderProps) {
  return (
    <div className="flex w-full p-8 text-foreground bg-gradient-to-r from-bpStart to-bpEnd rounded-t-3xl items-center justify-between flex-wrap xl:flex-nowrap">
      <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-8 w-full xl:w-auto">
        <p className="w-full xl:w-auto">Name: {name}</p>
        <p className="w-full xl:w-auto">
          Local Birthday: {birthYear}/{birthMonth}/{birthDay}
        </p>
        <p className="w-full xl:w-auto">
          Lunar Birthday: {lunarYear}/{lunarMonth}/{lunarDay}
        </p>
        <p className="w-full xl:w-auto">
          Time: {birthHour}:{birthMinute}
        </p>
        <div className="xl:hidden flex justify-center text-xl border-2 border-foreground p-2 mt-4 xl:mt-0">
          <p>Lab 8</p>
        </div>
      </div>
      <div className="hidden xl:flex xl:justify-end text-xl border-2 border-foreground p-2 mt-4 xl:mt-0">
        <p>Lab 8</p>
      </div>
    </div>
  );
}
