import {MainContainer, AddNoteContainer, Button} from './styledComponents'
import NoteItem from '../NoteItem'
import {useState} from 'react'
import {v4} from 'uuid'
import './index.css'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  const [tasksList, settaskList] = useState([])

  const handleTitle = event => setTitle(event.target.value)

  const handleTask = event => setTask(event.target.value)

  const addItem = event => {
    event.preventDefault()
    const newItem = {
      id: v4(),
      title,
      task,
    }
    settaskList(prevState => [...prevState, newItem])
    setTitle('')
    setTask('')
  }

  const renderZeroListView = () => {
    return (
      <div className="no-notes-container">
        <img
          className="img-no-notes"
          alt="notes empty"
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        />
        <h1>No Notes yet</h1>
        <p>Notes you add will appear here</p>
      </div>
    )
  }

  const renderListView = () => {
    return (
      <ul>
        {tasksList.map(each => (
          <li key={each.id}>
            <NoteItem eachNote={each} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <MainContainer>
      <h1 className="color">Notes</h1>
      <AddNoteContainer onSubmit={addItem}>
        <input
          value={title}
          className="input"
          type="text"
          placeholder="Title"
          onChange={handleTitle}
        />
        <textarea
          value={task}
          onChange={handleTask}
          className="input input1"
          type="text"
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </AddNoteContainer>
      {tasksList.length === 0 ? renderZeroListView() : renderListView()}
    </MainContainer>
  )
}

export default Notes
