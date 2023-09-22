import React from 'react';
import ReactModal from 'react-modal';

export type FullScreenModalProps = {
  opened: boolean;
  onRequestClose?: () => void;
  children?: React.ReactNode;
};

export function FullScreenModal({
  opened,
  onRequestClose,
  children,
}: FullScreenModalProps) {
  return (
    <ReactModal
      isOpen={opened}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1d1d23',
          zIndex: 99,
        },
        content: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          backgroundColor: '#1d1d23',
          border: 'none',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 100,
        },
      }}
      closeTimeoutMS={300}
      onRequestClose={onRequestClose}
    >
      <i
        className='fa-solid fa-close p-3'
        onClick={onRequestClose}
      />
      {children}
    </ReactModal>
  );
}
