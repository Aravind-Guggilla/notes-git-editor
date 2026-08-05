import {useEffect, useState} from 'react'
import './App.css'

import Toolbar from './components/Toolbar/Toolbar'
import Sidebar from './components/Sidebar/Sidebar'
import Editor from './components/Editor/Editor'

import {getNote} from './api/notesApi'

function App() {
  const [selectedNotePath, setSelectedNotePath] = useState('')
  const [noteContent, setNoteContent] = useState('')

  useEffect(() => {
    loadNote()
  }, [selectedNotePath])

  async function loadNote() {
    if (!selectedNotePath) {
      return
    }

    try {
      const response = await getNote(selectedNotePath)

      console.log(response)

      setNoteContent(response.data.content);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='app'>
      <Toolbar />

      <div className='content'>
        <Sidebar onSelectNote={setSelectedNotePath} />

        <Editor content={noteContent} />
      </div>
    </div>
  )
}

export default App
