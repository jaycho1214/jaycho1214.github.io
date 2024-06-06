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
          icon='github'
          href='https://github.com/jaycho1214/movc'
        />
      </div>
      <h3>Background</h3>
      <p>
        When my dad first founded his venture capital firm, the excitement was
        palpable, but we quickly realized that the initial setup was just the
        beginning. In our industry, it was crucial for startups to contact us
        effortlessly and without hesitation. However, being new and relatively
        unknown posed a significant challenge—we weren't even on the map,
        literally.
        <br />
        To address this, I took several key initiatives to bolster our presence.
        A major step was launching a comprehensive website that not only
        showcases our investment philosophy but also simplifies the outreach
        process for startups. Through an easy-to-use form, startups can submit
        their details, which are then automatically relayed to our Slack for
        immediate attention.
        <br />
        Additionally, I designed the database to allow updates, such as changes
        in employee information, without requiring any coding. This ensures the
        site remains current and functional, even in my absence. These efforts
        have significantly enhanced our visibility and accessibility, helping to
        establish our firm as a notable player in the venture capital landscape.
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
