import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import TraitButton from '../TraitButton/TraitButton';
import TraitModalContent from '../TraitModalContent/TraitModalContent';

const HomeTraitsButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrait, setSelectedTrait] = useState('');

  const handleOpenTraitModal = (trait) => {
    setSelectedTrait(trait);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrait('');
  };

  return (
    <div className="bg-cover bg-center bg-[url(/home-traits.png)] h-[40vh] w-full lg:h-[50vh] lg:w-[50vh] xl:h-[70vh] xl:w-[70vh] grid grid-cols-3">
      <div />
      <TraitButton trait="fire" onClick={handleOpenTraitModal} />
      <div />
      <TraitButton trait="wood" onClick={handleOpenTraitModal} />
      <div />
      <TraitButton trait="earth" onClick={handleOpenTraitModal} />
      <div className="col-span-3 grid grid-cols-2">
        <TraitButton trait="water" onClick={handleOpenTraitModal} />
        <TraitButton trait="metal" onClick={handleOpenTraitModal} />
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} bgColor="bg-white" maxWidth="max-w-2xl">
          <TraitModalContent trait={selectedTrait} />
        </Modal>
      )}
    </div>
  );
};

export default HomeTraitsButtons;
