import {useState} from 'react'

import './TreeNode.css'

import type {NoteTreeNode} from '../../types/note'

type TreeNodeProps = {
  node: NoteTreeNode
  level: number
  onSelectNote: (path: string) => void
}

function TreeNode({node, level, onSelectNote}: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(true)

  function handleClick() {
    if (node.type === 'folder') {
      setIsOpen(!isOpen)
    } else {
      onSelectNote(node.path)
    }
  }

  return (
    <>
      <div
        className='tree-node'
        style={{paddingLeft: `${level * 20}px`}}
        onClick={handleClick}
      >
        {node.type === 'folder' ? (
          <>
            {isOpen ? '📂 ' : '📁 '}
            {node.name}
          </>
        ) : (
          <>📄 {node.name}</>
        )}
      </div>

      {isOpen &&
        node.children?.map(child => (
          <TreeNode
            key={child.path}
            node={child}
            level={level + 1}
            onSelectNote={onSelectNote}
          />
        ))}
    </>
  )
}

export default TreeNode
