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
          icon='fa-brands fa-github'
          href='https://github.com/jaycho1214/pcc-bots'
        />
        <IconLink
          icon='fa-brands fa-github'
          href='https://github.com/jaycho1214/pcc-preview'
        />
      </div>
      <h3>Background</h3>
      <p>
        Before transferring to UCLA, I attended Pasadena City College. When I
        first enrolled at Pasadena City College, my primary goal was to complete
        my studies within a year and then transfer to another college. To
        achieve this, I had to take all the required classes. Thus, I developed
        an app that would automatically register for classes at the designated
        times. I also discovered that our school website concealed the upcoming
        semester's schedule and only made it available at specific times.
        However, I found a way to access this data and shared it with my peers.
      </p>
      <h3>Tech Stack</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Python' />
        <Tag text='Django' />
        <Tag text='Slack' />
        <Tag text='GCP App Engine' />
        <Tag text='MySQL' />
      </div>
      <h3>Screenshot</h3>
      <img src='https://i.imgur.com/lkut6pn.gif' />
    </article>
  );
}
