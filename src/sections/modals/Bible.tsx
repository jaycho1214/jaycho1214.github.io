import { IconLink, Tag } from '../../components';

export function Bible() {
  return (
    <article className='prose prose-invert prose-h2:mt-0 prose-h2:mb-0'>
      <div className='flex flex-row items-center'>
        <h2 className='mr-5'>Bible</h2>
        <Tag text='Vision Pro' />
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <IconLink
          href='https://crosswand.com/app/bible'
          icon='browser'
        />
        <IconLink
          href='https://apps.apple.com/us/app/bible-the-word-of-god/id6503010302'
          icon='apple'
        />
      </div>
      <h3>Background</h3>
      <p>
        Inspired by the release of Vision Pro, I envisioned a Bible app that
        adheres to Apple's design guidelines. I designed a new Bible app that
        follows spatial computing principles, offering an immersive and
        intuitive user experience.
        <br />
        <br />
        To enhance the depth of Bible study, I created a custom parser that
        allows users to compare multiple translations simultaneously. This
        feature enables users to delve deeper into the scripture, providing a
        comprehensive and enriching reading experience.
      </p>
      <h3>Tech Stack</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2'>
        <Tag text='Swift' />
        <Tag text='SwiftUI' />
        <Tag text='AWS S3' />
        <Tag text='AWS Cloudfront' />
        <Tag text='Sentry' />
        <Tag text='Mixpanel' />
      </div>
    </article>
  );
}
