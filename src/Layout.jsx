import Header from './components/header/header';
import Homepage from './routes/homepage';

function Layout() {
  return (
    <div className='h-full'>
      <Header />
      <Homepage />
    </div>
  )
}

export default Layout;
