export default function BaziDayun({ qiyunYear, dayunGanZhi, dayunAge, dayunStart }) {

  const regex = /(\d+)年(\d+)月(\d+)天/;
  const matches = qiyunYear.match(regex);
  const qiyunStartYear = parseInt(matches[1]);
  const qiyunStartMonth = parseInt(matches[2]);
  const qiyunStartDay = parseInt(matches[3]);

  return (
    <div className="flex">
      <div className="flex flex-col items-start">
        <p>Decade Cycle</p>
        <p>Decade Cycle starts {qiyunStartYear} years {qiyunStartMonth} months {qiyunStartDay} days after birth.</p>
      </div>
      <div className="flex flex-col items-center">
        <table className="min-w-full border-collapse table-fixed">
          <thead>
          <tr>
              {dayunAge.map((age, index) => (
                <td key={index} className="border border-gray-300 p-2 text-center">
                  Age: {age}<br/>{dayunStart[index]}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {dayunGanZhi.map((ganZhi, index) => (
                <td key={index} className="border border-gray-300 p-2 text-center">
                  {ganZhi[0]}<br />
                  {ganZhi[1]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}
