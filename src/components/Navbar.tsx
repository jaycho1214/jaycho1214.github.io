import React, { useCallback, useEffect, useState } from 'react';

export function Navbar() {
  const [active, setActive] = useState('Home');

  const onClickAnchor: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      event.preventDefault();
      const href = event.currentTarget.hash;
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  const handleScroll = useCallback(() => {
    const pos = window.scrollY;
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const offset = 100;

      if (
        pos >= sectionTop - offset &&
        pos < sectionTop + sectionHeight - offset
      ) {
        setActive(section.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-screen-xl flex flex-wrap items-center md:justify-center justify-end mx-auto p-4'>
        <div className='flex items-center md:order-2'>
          <button
            data-collapse-toggle='navbar-user'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-user'
            aria-expanded='false'
          >
            <i className='fa-solid fa-ellipsis' />
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-user'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0'>
            {[
              { key: 'Home', path: '#Home' },
              { key: 'About', path: '#About' },
              { key: 'Projects', path: '#Projects' },
            ].map(({ key, path }) => (
              <li key={key}>
                <a
                  href={path}
                  className={`block py-2 pl-3 pr-4 text-white md:p-0 ${
                    active === key ? 'font-bold' : ''
                  }`}
                  onClick={onClickAnchor}
                >
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
