import { useCallback, useState } from 'react';
import Modal from 'react-modal';
import DIV2CSUImage from '../assets/images/projects/logo/div2csu.png';
import MOVCImage from '../assets/images/projects/logo/movc.png';

import { Card, FullScreenModal, Section } from '../components';
import { MoLi, Reflection, DIV2CSU, MOVC, PCC } from './modals';

Modal.setAppElement('#root');

const Pages = {
  moli: <MoLi />,
  movc: <MOVC />,
  pcc: <PCC />,
  reflection: <Reflection />,
  div2csu: <DIV2CSU />,
};

export function Projects() {
  const [modal, setModal] = useState<keyof typeof Pages | null>(null);

  const onClick = useCallback(
    (key: keyof typeof Pages) => () => {
      setModal(key);
    },
    [],
  );

  return (
    <Section id='Projects'>
      <h1 className='text-3xl font-bold md:text-7xl mb-10'>Projects 💻</h1>
      <div className='flex-1 grid grid-cols-2 md:grid-cols-4 gap-4'>
        <Card
          title='PCC Preview/Bot'
          src='https://i.imgur.com/987BSZn.jpg'
          onClick={onClick('pcc')}
        />
        <Card
          title='MO Ventures'
          onClick={onClick('movc')}
          src={MOVCImage}
        />
        <Card
          title='MoLi'
          onClick={onClick('moli')}
          src='https://crosswand.com/_app/immutable/assets/icon.bf9d18f5.png'
        />
        <Card
          onClick={onClick('reflection')}
          title='Reflection'
          src='https://crosswand.com/_app/immutable/assets/icon.d843aa81.png'
        />
        <Card
          onClick={onClick('div2csu')}
          title='DIV2CSU'
          src={DIV2CSUImage}
        />
      </div>
      <FullScreenModal
        opened={modal != null}
        onRequestClose={() => setModal(null)}
      >
        {modal == null ? null : Pages[modal]}
      </FullScreenModal>
    </Section>
  );
}
