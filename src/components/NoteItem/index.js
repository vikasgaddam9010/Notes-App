import '../Notes/index.css'

const NoteItem = props => {
  const {eachNote} = props
  return (
    <div>
      <h1 className="m-0 mb-1">{eachNote.title}</h1>
      <p className="m-0">{eachNote.task}</p>
    </div>
  )
}

export default NoteItem
