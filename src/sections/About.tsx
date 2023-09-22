import { Section } from '../components';

export function About() {
  return (
    <Section id='About'>
      <h1 className='text-3xl font-bold md:text-7xl'>About</h1>
      <h2 className='text-lg mt-5 font-bold'>Education</h2>
      <div className='mt-5'>
        <p>University of California, Los Angeles</p>
        <span>Los Angeles, CA</span>
      </div>
      <div className='mt-5'>
        <p>Pasadena City College</p>
        <span>Pasadena, CA</span>
      </div>
      <div className='mt-5'>
        <p>GVCS (Global Vision Christian School)</p>
        <span>충청북도 음성</span>
      </div>
    </Section>
  );
}
