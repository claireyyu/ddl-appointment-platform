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
    <div className="flex w-full p-8 text-foreground bg-gradient-to-r from-bpStart to-bpEnd rounded-t-3xl items-center justify-between flex-wrap md:flex-nowrap">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
        <p className="w-full md:w-auto">Name: {name}</p>
        <p className="w-full md:w-auto">
          Local Birthday: {birthYear}/{birthMonth}/{birthDay}
        </p>
        <p className="w-full md:w-auto">
          Lunar Birthday: {lunarYear}/{lunarMonth}/{lunarDay}
        </p>
        <p className="w-full md:w-auto">
          Time: {birthHour}:{birthMinute}
        </p>
        <div className="md:hidden flex justify-center text-xl border-2 border-foreground p-2 mt-4 md:mt-0">
          <p>Lab 8</p>
        </div>
      </div>
      <div className="hidden md:flex md:justify-end text-xl border-2 border-foreground p-2 mt-4 md:mt-0">
        <p>Lab 8</p>
      </div>
    </div>
  );
}
