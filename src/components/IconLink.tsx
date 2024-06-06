export type IconLinkProps = {
  href?: string;
  icon: keyof typeof names;
  disabled?: boolean;
};

const names = {
  github: 'bi bi-github',
  browser: 'bi bi-browser-chrome',
  apple: 'bi bi-apple',
  googleplay: 'bi bi-google-play',
};

export function IconLink({ href, icon, disabled }: IconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex bg-black aspect-square rounded-full px-2 items-center no-underline'
    >
      <i className={`${names[icon]} ${disabled ? 'text-gray-500' : ''}`} />
    </a>
  );
}
