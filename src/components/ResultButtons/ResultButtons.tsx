import React from 'react';

interface ResultButtonsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ResultButtons: React.FC<ResultButtonsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col items-stretch mt-4 space-y-4">
      <button
        className={`px-3 py-2 rounded-custom shadow-button ${activeTab === 'bazi' ? 'bg-gradient-to-r from-bStart to-bEnd text-foreground' : 'bg-foreground text-black'}`}
        onClick={() => setActiveTab('bazi')}
      >
        Bazi
      </button>
      <button
        className={`px-3 py-2 rounded-custom shadow-button ${activeTab === 'liupan' ? 'bg-gradient-to-r from-bStart to-bEnd text-foreground' : 'bg-foreground text-black'}`}
        onClick={() => setActiveTab('liupan')}
      >
        Liupan
      </button>
    </div>
  );
};

export default ResultButtons;
