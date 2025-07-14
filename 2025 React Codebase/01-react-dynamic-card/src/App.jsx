import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <Card name={'Ritesh Kumar Rai'} followers={5600} status='offline' />
      <Card name='Shyaam' followers={890045} status='online' />
      <Card />
    </>
  )
}

export default App
