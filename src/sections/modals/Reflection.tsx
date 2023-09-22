import { IconLink, Tag } from '../../components';

export function Reflection() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>Reflection</h2>
        <Tag text='Mobile' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          href='https://crosswand.com/app/reflection'
          icon='fa-solid fa-browser'
        />
        <IconLink
          href='https://play.google.com/store/apps/details?id=com.crosswand.reflection'
          icon='fa-brands fa-google-play'
        />
        <IconLink
          href='https://apps.apple.com/app/reflection-note-reflections/id6443961419'
          icon='fa-brands fa-apple'
        />
      </div>
      <h3>Features</h3>
      <p>
        There are moments when you need to jot down a sudden thought, idea, or
        inspiration. "Reflection" is the ideal app for such situations. You can
        quickly record your thoughts and even set reminders within the app.
      </p>
      <h3>Tech Stack</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='React Native' />
        <Tag text='Swift' />
        <Tag text='Typescript' />
        <Tag text='Realm' />
        <Tag text='Mixpanel' />
        <Tag text='Fastlane' />
        <Tag text='Styled Components' />
        <Tag text='Styled System' />
        <Tag text='Firebase' />
        <Tag text='Eslint' />
      </div>
    </article>
  );
}
