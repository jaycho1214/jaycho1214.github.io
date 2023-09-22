import { IconLink, Tag } from '../../components';

export function MoLi() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>MoLi - Motive List</h2>
        <Tag text='Mobile' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          href='https://crosswand.com/app/moli'
          icon='fa-solid fa-browser'
        />
        <IconLink
          href='https://play.google.com/store/apps/details?id=com.crosswand.motivelist'
          icon='fa-brands fa-google-play'
        />
        <IconLink
          href='https://apps.apple.com/app/motive-list/id1636091291'
          icon='fa-brands fa-apple'
        />
      </div>
      <h3>Background</h3>
      <p>
        Motive List is a simple to-do list app, but it holds special meaning for
        me. I developed this app while I was serving in the military in Korea.
        During that period, I created and deleted several apps, which means none
        made it to the public. Recognizing my frustration, my girlfriend
        suggested, "Why not create a random to-do list app and publish it to the
        app store since we don't have any?" Feeling her encouragement, I went
        ahead and released it.
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
        <Tag text='Eslint' />
      </div>
    </article>
  );
}
