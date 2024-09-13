import './App.css'
import { Greeting } from './components/Ex1'
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
    </>
  )
}

export default App
