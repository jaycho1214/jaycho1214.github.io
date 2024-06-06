import { IconLink, Tag } from '../../components';

export function PCC() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>Pasadena City College Bots</h2>
        <Tag text='Website' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          icon='github'
          href='https://github.com/jaycho1214/pcc-bots'
        />
        <IconLink
          icon='github'
          href='https://github.com/jaycho1214/pcc-preview'
        />
      </div>
      <h3>Background</h3>
      <p>
        During my time at Pasadena City College, I embarked on a mission to
        complete my studies within a year to transfer to UCLA. To achieve this
        ambitious goal, I took a proactive approach by developing a unique website
        that automated the class registration process. This website ensured I
        could secure all required courses at the precise times they became
        available. Additionally, I uncovered a hidden feature on the school's
        website that revealed the upcoming semester's schedule at specific
        intervals. By accessing and sharing this crucial information with my
        peers, I facilitated better planning and course selection for many
        students. This experience not only honed my technical skills but also
        underscored my commitment to helping others achieve their academic
        goals.
      </p>
      <h3>Tech Stack</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Python' />
        <Tag text='Flask' />
        <Tag text='BeautifulSoup4' />
        <Tag text='Coveralls' />
        <Tag text='Travis CI' />
      </div>
      <h3>Screenshot</h3>
      <img src='https://i.imgur.com/lkut6pn.gif' />
    </article>
  );
}
