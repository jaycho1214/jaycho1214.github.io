export type IconLinkProps = { href?: string; icon: string; disabled?: boolean };

export function IconLink({ href, icon, disabled }: IconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      className='flex bg-black aspect-square rounded-full px-4 items-center no-underline'
    >
      <i className={`${icon} ${disabled ? 'text-gray-500' : ''}`} />
    </a>
  );
}
