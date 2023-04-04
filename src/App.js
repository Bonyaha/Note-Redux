import { useEffect } from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import { initializeNotes } from './reducers/noteReducer'

import { useDispatch } from 'react-redux'

const App = () => {
  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    console.log(content)
  }
  const toggleImportance = (note) => {
    console.log('toggle importance of', note.id)
  }
  const notes = []
  return (
    <div>
      <h2>Notes App</h2>
      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportancen(note)}>
          {note.content}
          <strong>{note.important ? 'important' : ''}</strong>
        </li>
      ))}
    </div>
  )
}

export default App
