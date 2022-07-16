// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting(props) {
  // 💣 delete this variable declaration and replace it with a React.useState call

  console.log(props)

  const [name, setName] = React.useState(props.initicialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    event.preventDefault()
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initicialName={"Gustavo"} />
}

export default App
