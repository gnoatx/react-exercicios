import './App.css'
import { Greeting } from './components/Ex1'
import { Gallery } from './components/Ex10'
import { Counter } from './components/Ex2'
import { List } from './components/Ex3'
import { ColourChange } from './components/Ex4'
import { UserProfile } from './components/Ex5'
import { ToggleVisibility } from './components/Ex6'
import { TextBox } from './components/Ex7'
import { WordCount } from './components/Ex8'
import { Calculator } from './components/Ex9'

function App() {
  const list = [
    "Comer pão",
    "Comprar pão",
    "Escrever código",
    "Dormir"
  ]

  const images = [
    'src/components/Ex10/all ears.webp',
    'src/components/Ex10/bitch.png',
    'src/components/Ex10/cat thumbs up.png',
    'src/components/Ex10/grrcoon.jpg',
    'src/components/Ex10/sailordog.jpg',
    'src/components/Ex10/stooooooop fiiighting.jpg',
    'src/components/Ex10/shibe nose.jpg',
    'src/components/Ex10/say that again.jpg',
    'src/components/Ex10/oh wow.jpg',
    'src/components/Ex10/coon.jpg'
  ]

  return (
    <>
      <Greeting name="Victor"></Greeting>
      <Counter></Counter>
      <List list={list}></List>
      <ColourChange></ColourChange>
      <UserProfile name="Victor" age="27" photo="src/components/Ex5/photo.jpg"></UserProfile>
      <ToggleVisibility></ToggleVisibility>
      <TextBox></TextBox>
      <WordCount></WordCount>
      <Calculator></Calculator>
      <Gallery images={images}></Gallery>
    </>
  )
}

export default App
