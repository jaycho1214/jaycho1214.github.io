import AnimatedCursor from 'react-animated-cursor';

export function Cursor() {
  return (
    <AnimatedCursor
      innerSize={5}
      outerSize={40}
      innerScale={1}
      color='#fff'
      outerScale={1.5}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: '#FFF',
      }}
      outerStyle={{
        border: '3px solid #FFF',
      }}
      clickables={['i', 'a', '.card']}
    />
  );
}
