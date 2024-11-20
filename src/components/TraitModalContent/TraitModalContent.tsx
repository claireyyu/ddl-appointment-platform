import React from 'react';
import { useTranslations } from 'next-intl';

const TraitModalContent = ({ trait }: { trait: string }) => {
  const t = useTranslations('TraitModalContent'); // Specify the namespace for translations

  // Check if the trait exists in the translation files
  const isTraitValid = t.raw(trait)?.title;

  if (!isTraitValid) {
    return <p>{t('invalidTrait')}</p>; // Fallback message for invalid trait
  }

  return (
    <div className="p-4 text-background">
      <h2 className="text-xl font-bold mb-4">{t(`${trait}.title`)}</h2>
      <ul className="list-disc">
        <li className="mb-2">{t(`${trait}.coreTraits`)}</li>
        <li className="mb-4">{t('personalityCharacteristics')}:</li>
        <div className="ml-4 mb-4">
          {t.raw(`${trait}.personalityCharacteristics`).map((characteristic: string, index: number) => (
            <p key={index} className="ml-2 mb-2">- {characteristic}</p>
          ))}
        </div>
        <li className="mb-2">{t(`${trait}.typicalBehavior`)}</li>
        <li className="mb-2">{t(`${trait}.keywords`)}</li>
      </ul>
    </div>
  );
};

export default TraitModalContent;
