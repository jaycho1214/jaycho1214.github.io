import { IconLink, Tag } from '../../components';

export function MoLi() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>MoLi - Motive List</h2>
        <Tag text='Mobile App' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          href='https://crosswand.com/app/moli'
          icon='browser'
        />
        <IconLink
          href='https://play.google.com/store/apps/details?id=com.crosswand.motivelist'
          icon='googleplay'
        />
        <IconLink
          href='https://apps.apple.com/app/motive-list/id1636091291'
          icon='apple'
        />
      </div>
      <h3>Background</h3>
      <p>
        Motive List is a simple to-do list app that I developed during my time
        in the military. Despite creating and deleting several apps previously,
        I was motivated to publish this one. After releasing it to the app
        store, it became a meaningful project that marked my first publicly
        available app.
      </p>
      <h3>Tech Stack</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='React Native' />
        <Tag text='Typescript' />
        <Tag text='Mobx' />
        <Tag text='Zustand' />
        <Tag text='Sentry' />
        <Tag text='Mixpanel' />
        <Tag text='Fastlane' />
        <Tag text='Styled Components' />
        <Tag text='Styled System' />
        <Tag text='Firebase' />
        <Tag text='ESLint' />
      </div>
    </article>
  );
}
