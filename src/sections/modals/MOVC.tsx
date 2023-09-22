import Screenshot from '../../assets/images/projects/screenshots/movc.png';
import { IconLink, Tag } from '../../components';

export function MOVC() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>MO Ventures</h2>
        <Tag text='Website' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          icon='fa-brands fa-github'
          href='https://github.com/jaycho1214/movc'
        />
      </div>
      <h3>Background</h3>
      <p>
        Honestly, my dad owns this company. When he first founded his venture
        capital firm, our excitement was palpable. Yet, the initial setup was
        just the tip of the iceberg. Given our industry, we recognized the need
        for startups to contact us effortlessly and without hesitation. However,
        being new and relatively unknown meant we weren't even on the
        map—literally. So, I took several initiatives to bolster our presence.
        One key step was launching a website that not only showcases our
        investment philosophy but also streamlines the process for startups to
        reach out. They can simply fill out a form with their details, and like
        magic, it's relayed to our Slack. Plus, the database is designed to
        allow updates, like employee information, without any coding. This
        ensures the site remains current, even in my absence.
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
      <img src={Screenshot} />
    </article>
  );
}
