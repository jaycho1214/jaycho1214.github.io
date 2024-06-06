import { IconLink, Tag } from '../../components';

export function Intime() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>In Time</h2>
        <Tag text='Vision Pro' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          href='https://crosswand.com/app/intime'
          icon='browser'
        />
        <IconLink
          href='https://apps.apple.com/us/app/in-time-time-management/id6502642828'
          icon='apple'
        />
      </div>
      <h3>Background</h3>
      <p>
        Fascinated by the potential of spatial computing to transform our world,
        I envisioned an application to explore its practical uses. "In Time" is
        an app designed to track work efficiency by allowing users to set a
        stopwatch, timer, or break time.
        <br />
        <br />
        The app can be positioned around your workspace, enabling you to start
        the counter and monitor your productivity seamlessly. This innovative
        approach helps users manage their time effectively and enhance their
        work efficiency.
      </p>
      <h3>Tech Stack</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Swift' />
        <Tag text='SwiftUI' />
        <Tag text='SwiftData' />
        <Tag text='Sentry' />
        <Tag text='Mixpanel' />
      </div>
    </article>
  );
}
