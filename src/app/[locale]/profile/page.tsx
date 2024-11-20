'use client';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { AuthContextType } from '../../types/auth';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../contexts/ModalContext';
import ProfileList from '../../components/ProfileList/ProfileList';
import CreateProfileModal from '../../components/CreateProfileModal/CreateProfileModal';
import CreateProfileBtn from '../../components/CreateProfileBtn/CreateProfileBtn';
import CreateProfileMobile from '../../components/CreateProfileMobile/CreateProfileMobile';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

export default function ProfilePage() {
  const { openModal } = useModal();
  const { user, loading } = useAuth() as AuthContextType;
  const { isModalOpen, closeModal } = useModal();
  const [openMobileForm, setOpenMobileForm] = useState(false);

  function toggleMobileForm() {
    setOpenMobileForm(!openMobileForm);
  }

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
        <LoadingAnimation title="Decoding"/>
      ) : user ? (
          <div className="flex flex-col ">
            {/* mobile */}
            <div className="xl:hidden border-bEnd border-2 rounded-custom mb-8 inline-flex self-center mt-8">
              <CreateProfileBtn onClick={toggleMobileForm} />
            </div>
            {openMobileForm && <CreateProfileMobile openMobileForm={openMobileForm} toggleMobileForm={toggleMobileForm} />}

            {/* desktop */}
            <ProfileList />      
            <CreateProfileModal />
        </div>
          
      ) : (
        <p className="text-center">You're not logged in.</p>
      )}
    </div>
  );
}
