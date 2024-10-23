'use client';

import React, { createContext, useState, ReactNode } from 'react';

type BaziContextType = {
  selectedDayunGanzhi: string;
  setSelectedDayunGanzhi: (value: string) => void;
  selectedLiunianGanzhi: string;
  setSelectedLiunianGanzhi: (value: string) => void;
  selectedLiuyueGanzhi: string;
  setSelectedLiuyueGanzhi: (value: string) => void;
  dayunNianzhuArray: any[];
  setDayunNianzhuArray: (value: any[]) => void;
};

export const BaziContext = createContext<BaziContextType | undefined>(undefined);

export const BaziProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDayunGanzhi, setSelectedDayunGanzhi] = useState('');
  const [selectedLiunianGanzhi, setSelectedLiunianGanzhi] = useState('');
  const [selectedLiuyueGanzhi, setSelectedLiuyueGanzhi] = useState('');
  const [dayunNianzhuArray, setDayunNianzhuArray] = useState([]);

  return (
    <BaziContext.Provider
      value={{
        selectedDayunGanzhi,
        setSelectedDayunGanzhi,
        selectedLiunianGanzhi,
        setSelectedLiunianGanzhi,
        selectedLiuyueGanzhi,
        setSelectedLiuyueGanzhi,
        dayunNianzhuArray,
        setDayunNianzhuArray,
      }}
    >
      {children}
    </BaziContext.Provider>
  );
};
