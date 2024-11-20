// import React from 'react';

// const traitContent = {
//   metal: {
//     title: 'Metal (Righteousness)',
//     coreTraits: 'Core Traits: Firm, decisive, values rules and fairness.',
//     personalityCharacteristics: [
//       'Strengths: Strong sense of justice and responsibility, highly efficient, and excellent at making decisions. Clear judgment and logical thinking, suitable for solving complex problems.',
//       'Weaknesses: Too rigid and uncompromising, often struggles to adapt. Tends to see things in black and white. Emotional expression can be restrained or appear cold.',
//     ],
//     typicalBehavior: 'Typical Behavior: Prefers to set rules and control situations, values order and whether others’ actions align with moral standards.',
//     keywords: 'Keywords: Integrity, decisiveness, self-discipline.',
//   },
//   wood: {
//     title: 'Wood (Benevolence)',
//     coreTraits: 'Core Traits: Full of vitality, growth-oriented, and highly creative.',
//     personalityCharacteristics: [
//       'Strengths: Energetic, open-minded, compassionate, and persevering in pursuit of goals. Has clear ideals and a forward-looking mindset, enjoys helping others.',
//       'Weaknesses: Can be overly idealistic, impatient, and prone to emotional fluctuations. Sometimes ignores practical issues.',
//     ],
//     typicalBehavior: 'Typical Behavior: Takes the initiative to handle pioneering tasks, seeks progress, and thrives on new ideas and experiences.',
//     keywords: 'Keywords: Innovation, persistence, kindness.',
//   },
//   water: {
//     title: 'Water (Wisdom)',
//     coreTraits: 'Core Traits: Flexible, intelligent, adaptable, and insightful.',
//     personalityCharacteristics: [
//       'Strengths: Emotionally intelligent, strong communication skills, quick to find solutions to problems, and highly intuitive. Adaptable and resilient.',
//       'Weaknesses: Can lack decisiveness, avoid pressure, or become overly dependent on others.',
//     ],
//     typicalBehavior: 'Typical Behavior: Skilled at using indirect approaches to solve problems, enjoys observing and analyzing complex relationships or the essence of things.',
//     keywords: 'Keywords: Wisdom, flexibility, inclusiveness.',
//   },
//   fire: {
//     title: 'Fire (Ritual)',
//     coreTraits: 'Core Traits: Passionate, energetic, and a natural leader who seeks light and truth.',
//     personalityCharacteristics: [
//       'Strengths: Radiates enthusiasm, enjoys sharing, and is full of hope for life. Inspires others and motivates teams effectively.',
//       'Weaknesses: Highly emotional and impulsive, may act without considering consequences. Can struggle with patience and deep reflection.',
//     ],
//     typicalBehavior: 'Typical Behavior: Boldly takes on challenges, loves to be the center of attention, and drives themselves and others to achieve goals with their energy.',
//     keywords: 'Keywords: Passion, courage, brightness.',
//   },
//   earth: {
//     title: 'Earth (Faith)',
//     coreTraits: 'Core Traits: Grounded, reliable, and focused on trust and stability.',
//     personalityCharacteristics: [
//       'Strengths: Provides a sense of security, values commitment, and is dependable. Calm under pressure and excellent at long-term planning.',
//       'Weaknesses: Overly cautious and resistant to change. May become too stuck in routines, missing out on opportunities.',
//     ],
//     typicalBehavior: 'Typical Behavior: Focuses on maintaining the status quo, builds lasting relationships and foundations, and prioritizes practical results.',
//     keywords: 'Keywords: Stability, trust, perseverance.',
//   },
// };

// const TraitModalContent = ({ trait }) => {
//   const content = traitContent[trait.toLowerCase()];

//   if (!content) {
//     return <p>Invalid trait selected.</p>;
//   }

//   return (
//     <div className="p-4 text-background">
//       <h2 className="text-xl font-bold mb-4">{content.title}</h2>
//       <ul className="list-disc">
//         <li className="mb-2">{content.coreTraits}</li>
//         <li className="mb-4">Personality Characteristics:</li>
//         <div className="ml-4 mb-4">
//           {content.personalityCharacteristics.map((trait) => (
//             <p className="ml-2 mb-2">- {trait}</p>
//           ))}
//         </div>
//         <li className="mb-2">{content.typicalBehavior}</li>
//         <li className="mb-2">{content.keywords}</li>
//       </ul>

//     </div>
//   );
// };

// export default TraitModalContent;

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
