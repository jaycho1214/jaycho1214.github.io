import { useCallback, useState } from 'react';
import Modal from 'react-modal';

import DIV2CSUImage from '../assets/images/projects/logo/div2csu.png';
import MOVCImage from '../assets/images/projects/logo/movc.png';
import MoliImage from '../assets/images/projects/logo/moli.png';
import ReflectionImage from '../assets/images/projects/logo/reflection.png';
import PrayerImage from '../assets/images/projects/logo/prayer.png';
import IntimeImage from '../assets/images/projects/logo/intime.png';
import BibleImage from '../assets/images/projects/logo/bible.png';

import { Card, FullScreenModal, Section } from '../components';
import {
  MoLi,
  Reflection,
  DIV2CSU,
  MOVC,
  PCC,
  Prayer,
  Bible,
  Intime,
} from './modals';

Modal.setAppElement('#root');

const Pages = {
  moli: <MoLi />,
  movc: <MOVC />,
  pcc: <PCC />,
  reflection: <Reflection />,
  div2csu: <DIV2CSU />,
  prayer: <Prayer />,
  bible: <Bible />,
  intime: <Intime />,
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
          title='Bible'
          onClick={onClick('bible')}
          src={BibleImage}
        />
        <Card
          title='In Time'
          onClick={onClick('intime')}
          src={IntimeImage}
        />
        <Card
          title='Prayer'
          onClick={onClick('prayer')}
          src={PrayerImage}
        />
        <Card
          onClick={onClick('div2csu')}
          title='DIV2CSU'
          src={DIV2CSUImage}
        />
        <Card
          onClick={onClick('reflection')}
          title='Reflection'
          src={ReflectionImage}
        />
        <Card
          title='MoLi'
          onClick={onClick('moli')}
          src={MoliImage}
        />
        <Card
          title='MO Ventures'
          onClick={onClick('movc')}
          src={MOVCImage}
        />
        <Card
          title='PCC Preview/Bot'
          src='https://i.imgur.com/987BSZn.jpg'
          onClick={onClick('pcc')}
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
