import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export type CardProps = {
  title: string;
  src: HTMLImageElement['src'];
  onClick?: () => void;
};

export function Card({ title, src, onClick }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Tilt className='card'>
        <div onClick={onClick}>
          <img
            className='aspect-square rounded-lg'
            src={src}
            style={{
              objectFit: 'cover',
            }}
          />
          <div className='mt-2' />
          <h1 className='font-bold'>{title}</h1>
        </div>
      </Tilt>
    </motion.div>
  );
}
