import './Sidebar.css'

import {useEffect, useState} from 'react'

import {getTree} from '../../api/notesApi'
import type {NoteTreeNode} from '../../types/note'
import TreeNode from './TreeNode'

type SidebarProps = {
  onSelectNote: (path: string) => void
}

function Sidebar({onSelectNote}: SidebarProps) {
  const [tree, setTree] = useState<NoteTreeNode[]>([])

  useEffect(() => {
    loadTree()
  }, [])

  async function loadTree() {
    try {
      const response = await getTree()

      setTree(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(tree)

  return (
    <div className='sidebar'>
      <h3>Notes</h3>

      {tree.map(node => (
        <TreeNode
          key={node.path}
          node={node}
          level={0}
          onSelectNote={onSelectNote}
        />
      ))}
    </div>
  )
}

export default Sidebar
