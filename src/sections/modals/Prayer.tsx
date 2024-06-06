import Screenshot from '../../assets/images/projects/screenshots/movc.png';
import { IconLink, Tag } from '../../components';

export function Prayer() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>Prayer</h2>
        <Tag text='Mobile App' />
      </div>
      <div className='flex flex-col items-start gap-1 my-2'>
        {[
          {
            title: 'Mobile App',
            url: 'https://github.com/theagapefoundation/prayer',
          },
          {
            title: 'API Server',
            url: 'https://github.com/theagapefoundation/prayer-api',
          },
          {
            title: 'Functions',
            url: 'https://github.com/theagapefoundation/prayer-functions',
          },
          {
            title: 'Website (Deep Link)',
            url: 'https://github.com/theagapefoundation/prayer-website',
          },
        ].map((value, idx) => (
          <div
            key={`site.${idx}`}
            className='flex flex-row items-center'
          >
            <h4 className='my-0 pr-2'>{value.title}</h4>
            <IconLink
              icon='github'
              href={value.url}
            />
          </div>
        ))}
      </div>
      <h3>Background</h3>
      <p>
        As a Christian, I have always wanted to use the talents God has given me
        to serve Him humbly. With this intention, I created a platform where
        users could share their prayers and pray for others. On this platform,
        users could visually see that their prayers were being prayed for and
        reciprocate by praying for others.
        <br />
        <br />
        Unfortunately, due to costs and a lack of users, I had to close the
        service. However, I still hope to one day launch a platform that brings
        together enough Christians to share their love, joy, and testimonies.
        May God bless all who read this.
      </p>
      <h3>Tech Stack (Mobile App)</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Dart' />
        <Tag text='Flutter' />
        <Tag text='Firebase Auth' />
        <Tag text='Mixpanel' />
        <Tag text='i18n' />
        <Tag text='MySQL' />
      </div>
      <h3>Tech Stack (API Server)</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='GCP' />
        <Tag text='NestJS' />
        <Tag text='Typescript' />
        <Tag text='Docker' />
        <Tag text='PostgreSQL' />
        <Tag text='Sentry' />
        <Tag text='Firebase' />
        <Tag text='CommitLint' />
        <Tag text='ESLint' />
      </div>
      <h3>Tech Stack (Website)</h3>
      <p>
        The website includes an group invitation feature utilizing deep links
      </p>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Python' />
        <Tag text='Django' />
        <Tag text='Sentry' />
        <Tag text='GCP' />
      </div>
      <h3>Tech Stack (Function)</h3>
      <p>
        The function operates on a serverless platform with a cron job to send
        user notifications at specified times.
      </p>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Go' />
        <Tag text='Firebase' />
        <Tag text='Cron' />
        <Tag text='GCP' />
      </div>
    </article>
  );
}
