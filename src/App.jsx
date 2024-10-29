// import Form from './components/Form';
import Topic from './components/Topic';
import Generator from './components/Generator';
import './css/style.css';

const App = () => {
  return (
    <section className='bg-black min-w-screen min-h-screen flex items-center justify-center'>
      <div className='container md:w-96 max-w-[350px] flex items-center justify-center'>
        <div className='password_box'>
          <Topic>Password Generator</Topic>
          {/* <Form/> */}
          <Generator/>
        </div>
      </div>
    </section>
  )
}

export default App
