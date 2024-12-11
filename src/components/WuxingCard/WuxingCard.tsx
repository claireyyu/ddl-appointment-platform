import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function findImgName(dayStem, language) {
  if (language === '中文') {
    switch (dayStem) {
      case '甲':
        return '甲木';
      case '乙':
        return '乙木';
      case '丙':
        return '丙火';
      case '丁':
        return '丁火';
      case '戊':
        return '戊土';
      case '己':
        return '己土';
      case '庚':
        return '庚金';
      case '辛':
        return '辛金';
      case '壬':
        return '壬水';
      case '癸':
        return '癸水';
    }
  } else {
    switch (dayStem) {
      case '甲':
        return 'JIA';
      case '乙':
        return 'YI';
      case '丙':
        return 'BING';
      case '丁':
        return 'DING';
      case '戊':
        return 'WU';
      case '己':
        return 'JI';
      case '庚':
        return 'GENG';
      case '辛':
        return 'XIN';
      case '壬':
        return 'REN';
      case '癸':
        return 'GUI';
    }
  }
}

export default function WuxingCard({ isOpen, onClose, dayStem }) {
  const t = useTranslations('LoginModal'); // Translation namespace
  const locale = useLocale();
  const language = locale === 'zh' ? '中文' : '英文';
  const imgName = findImgName(dayStem, language);
  const { width } = useWindowDimensions();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-hidden">
      <div
        className="bg-white rounded-custom-lg relative"
        style={{
          width: `${Math.min(width * 0.8, 400)}px`, // 最大宽度为 400px，最小为屏幕宽度的 80%
          aspectRatio: '1 / 1.6', // 保证宽高比为 1:1.6
        }}
      >
        <button
          className="absolute top-2 right-2 z-10 bg-gray-800 text-white hover:bg-gray-600 hover:text-gray-200 rounded-custom p-1"
          onClick={onClose}
        >
          ✕
        </button>
        <Image
          src={`/result-card/${language}/${imgName}.png`}
          alt={dayStem}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
