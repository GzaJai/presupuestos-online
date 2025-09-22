import React, { createContext, useCallback, useContext, useState } from 'react'
import ConfirmationModal from './ConfirmationModal';

const ModalProviderContext = createContext();

const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: "",
        description: "",
        onConfirm: () => {},
    });

    const showModal = useCallback(({ title, description, onConfirm }) => {
        setModalState({ isOpen: true, title, description, onConfirm })
    }, []);

    const hideModal = useCallback(() => {
        setModalState((prev) => ({ ...prev, isOpen: false}));
    }, []);

    const handleConfirm = () => {
        modalState.onConfirm?.();
        hideModal();
    };

  return (
    <ModalProviderContext.Provider value={{ showModal, hideModal }}>
        {children}
        <ConfirmationModal 
            isOpen={modalState.isOpen}
            title={modalState.title}
            description={modalState.description}
            onConfirm={handleConfirm}
            onCancel={hideModal}
        />
    </ModalProviderContext.Provider>
  )
}

export default ModalProvider

export function useConfirmationModal() {
    return useContext(ModalProviderContext);
}