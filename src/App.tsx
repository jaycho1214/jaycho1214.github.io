import { Divider } from './components';
import { About, Home, Projects } from './sections';

export default function App() {
  return (
    <>
      <div className='mt-24' />
      <Home />
      <Divider />
      <About />
      <Divider />
      <Projects />
    </>
  );
}
