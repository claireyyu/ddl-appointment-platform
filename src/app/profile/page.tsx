'use client';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { AuthContextType } from '../../types/auth';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../contexts/ModalContext';
import ProfileList from '../../components/ProfileList/ProfileList';
import CreateProfileModal from '../../components/CreateProfileModal/CreateProfileModal';

export default function ProfilePage() {
  const { user, loading } = useAuth() as AuthContextType;
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    if (!loading && !user) {
      console.log('User is not logged in.');
    }

    if (!loading && user) {
      console.log('User is logged in.');
    }
  }, [loading, user]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
            {/* <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p> */}

            <ProfileList />      
            <CreateProfileModal />
        </div>
          
      ) : (
        <p>Loading your profiles...</p>
      )}
    </div>
  );
}
