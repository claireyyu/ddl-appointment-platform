import Modal from '../Modal/Modal';
import { useTranslations } from 'next-intl';

export default function WuxingCard({ isOpen, onClose }) {
  const t = useTranslations('LoginModal'); // Translation namespace


  return (
    <Modal isOpen={isOpen} onClose={onClose} bgColor={'bg-foreground'}>
      <p>This is a card.</p>
    </Modal>
  );
}


