import Screenshot from '../../assets/images/projects/screenshots/div2csu.png';
import { IconLink, Tag } from '../../components';

export function DIV2CSU() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>DIV2CSU</h2>
        <Tag text='Website' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          icon='browser'
          disabled
        />
        <IconLink
          icon='github'
          href='https://github.com/jaycho1214/DIV2CSU'
        />
        <IconLink
          icon='github'
          href='https://github.com/jaycho1214/DIV2CSUAPI'
        />
      </div>
      <h3>Notice</h3>
      <p>
        To enhance maintainability, I merged the NextJS API Server with NextJS
        Server Actions
      </p>
      <h3>Background</h3>
      <p>
        "DIV2CSU" stands for Division 2, Combat Support Unit, where I served in
        the military. This was the first place where I encountered unique
        challenges, particularly concerning security. Due to these security
        concerns, everything was handled via paperwork.
        <br />
        In the Korean army, mandatory military service requires us to stay on
        the base, with limited vacation opportunities. Initially, soldiers are
        granted 24 days of vacation, but additional days can be earned through a
        merit point system. Each merit point earned translates to 48 points for
        one additional vacation day. However, this system had a significant
        drawback: every point earned required filling out identical forms
        twice—one for the recipient and one for the giver. Moreover, these forms
        were easily lost or torn, adding to the inefficiency.
        <br />I found this process redundant and inefficient, so I developed an
        online system where soldiers could record their merit points
        electronically. This innovation streamlined the process, reducing
        paperwork and improving efficiency for everyone involved.
      </p>
      <h3>Tech Stack (Website)</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='NextJS' />
        <Tag text='React' />
        <Tag text='Typescript' />
        <Tag text='Tailwindcss' />
        <Tag text='Vercel' />
        <Tag text='JWT' />
        <Tag text='Antd' />
        <Tag text='ESLint' />
      </div>
      <h3>Tech Stack (API)</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='NestJS' />
        <Tag text='Prisma' />
        <Tag text='Typescript' />
        <Tag text='Kysely' />
        <Tag text='MySQL' />
        <Tag text='JWT' />
        <Tag text='Sentry' />
        <Tag text='Webpack' />
        <Tag text='AWS EC2' />
        <Tag text='AWS CodeDeploy' />
        <Tag text='AWS S3' />
        <Tag text='Github Actions' />
        <Tag text='ESLint' />
      </div>
      <h3>Screenshot</h3>
      <img src={Screenshot} />
    </article>
  );
}
