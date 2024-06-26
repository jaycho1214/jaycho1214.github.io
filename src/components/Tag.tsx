export function Tag({ text }: { text: string }) {
  return (
    <div className='rounded-lg px-2 bg-black self-start'>
      <p className='font-bold text-sm text-center my-2'>{text}</p>
    </div>
  );
}
