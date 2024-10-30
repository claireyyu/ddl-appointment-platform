'use client';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { AuthContextType } from '../../types/auth';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../contexts/ModalContext';
import ProfileList from '../../components/ProfileList/ProfileList';
import CreateProfileModal from '../../components/CreateProfileModal/CreateProfileModal';
import CreateProfileBtn from '../../components/CreateProfileBtn/CreateProfileBtn';

export default function ProfilePage() {
  const { openModal } = useModal();
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
        <div className="flex flex-col ">
            {/* <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p> */}
            {
              <div className="lg:hidden border-bEnd border-2 rounded-custom mb-8 inline-flex self-center">
                <CreateProfileBtn onClick={openModal} />
              </div>
            }
            <ProfileList />      
            <CreateProfileModal />
        </div>
          
      ) : (
        <p>Loading your profiles...</p>
      )}
    </div>
  );
}
