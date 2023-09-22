import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Section } from '../components';

const TEXTS = ['Designer 👨‍🎨', 'Developer 🧑‍💻', 'Entrepreneur 🤵‍♂️'];

export function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((state) => state + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section id='Home'>
      <h1 className='text-3xl font-bold md:text-7xl'>
        Hi, 👋
        <br />
        {"I'm "}
        <TextTransition inline>
          {['Jay', 'Jay', 'Jaeyoung', 'Jaeyoung'][index % 4]}
        </TextTransition>
        {' Cho'}
      </h1>
      <div className='text-white text-xl md:text-4xl mt-2'>
        {'A '}
        <TextTransition
          springConfig={presets.molasses}
          inline
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
        {" who's always on the lookout for problems to solve around me"}
      </div>
    </Section>
  );
}
