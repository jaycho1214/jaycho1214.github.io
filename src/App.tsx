import { Cursor, Divider, Navbar, ScrollIndicator } from './components';
import { About, Home, Projects } from './sections';

export default function App() {
  return (
    <>
      <div className='mt-24' />
      <Navbar />
      <Home />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <div className='mt-48' />
      <ScrollIndicator />
      <Cursor />
    </>
  );
}
