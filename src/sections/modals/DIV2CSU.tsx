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
          icon='fa-solid fa-browser'
          disabled
        />
        <IconLink
          icon='fa-brands fa-github'
          href='https://github.com/jaycho1214/DIV2CSU'
        />
        <IconLink
          icon='fa-brands fa-github'
          href='https://github.com/jaycho1214/DIV2CSUAPI'
        />
      </div>
      <h3>
        Notice: We are planning use NextJS server actions instead of having a
        separate api server for cost issues.
      </h3>
      <h3>Background</h3>
      <p>
        You might be wondering what "DIV2CSU" stands for. DIV2CSU is an acronym
        for Division 2, Combat Support Unit, where I served in the military. The
        military was the first place where I encountered challenges I'd never
        faced before, especially concerning security. Due to these concerns,
        everything was handled via paperwork. In the Korean army, we have
        mandatory military service, which means we're required to stay on the
        military base and cannot go home whenever we wish. Initially, we are
        granted 24 days of vacation, but there are ways to earn additional days.
        One such method is through merit points. You might think, "Is this like
        school?" Indeed, we have a merit point system, where 48 points equate to
        one day. However, there's a catch. Every time we earn a merit point, we
        must fill out the same forms twice: one for the recipient and one for
        the giver. I found this redundant. Therefore, I decided to create a
        system where soldiers can record their points online.
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
        <Tag text='Eslint' />
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
        <Tag text='Eslint' />
      </div>
      <h3>Screenshot</h3>
      <img src={Screenshot} />
    </article>
  );
}
