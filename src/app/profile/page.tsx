'use client';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { AuthContextType } from '../../types/auth';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../contexts/ModalContext';
import ProfileList from '../../components/ProfileList/ProfileList';

export default function ProfilePage() {
  const { user, loading } = useAuth() as AuthContextType;
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    if (!loading && !user) {
      console.log('User is not logged in.');
    }
  }, [loading, user]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>

            <div>
            <ProfileList />
            </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-lg font-bold mb-4 text-background">This is a Modal</h2>
          </Modal>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
