"use client";

import BaziResult from '@/components/BaziCalculator/BaziResult';
import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const result = searchParams.get('result');
  const decodedResult = decodeURIComponent(result);


  return (
    <div>
      <BaziResult result={decodedResult}/>
    </div>
  );
}