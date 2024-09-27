// "use client";

// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// export default function ResultPage() {
//   const searchParams = useSearchParams();
//   const result = searchParams.get('result'); // Get the 'result' query param
//   const [decodedResult, setDecodedResult] = useState(null);

//   useEffect(() => {
//     if (result) {
//       try {
//         // Decode the URL-encoded result
//         const decoded = decodeURIComponent(result);
//         const parsedResult = JSON.parse(decoded); // Parse it back to a JSON object
//         setDecodedResult(parsedResult); // Set the decoded result
//       } catch (error) {
//         console.error("Error parsing the result:", error);
//       }
//     }
//   }, [result]);

//   return (
//     <div>
//       <h1>Result</h1>
//       {decodedResult ? (
//         <pre>{JSON.stringify(decodedResult, null, 2)}</pre>
//       ) : (
//         <p>Loading result...</p>
//       )}
//     </div>
//   );
// }

"use client";

import BaziResult from '@/components/BaziCalculator/BaziResult';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const result = searchParams.get('result'); // Get the 'result' query param
  const decodedResult = decodeURIComponent(result);


  return (
    <div>
      <BaziResult result={decodedResult} />
    </div>
  );
}