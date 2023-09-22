import React from 'react';

export type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className='flex flex-col justify-center p-5 md:p-20'
    >
      {children}
    </section>
  );
}
