import {promises as fs} from 'node:fs'

import {readNoteIndex} from './notes.service.js'
import {resolveNotePath} from '../utils/path.utils.js'

//Finds all notes that reference the given note.
 
export async function findLinkedNotes(targetPath: string): Promise<string[]> {
  const linkedNotes: string[] = []

  const notes = await readNoteIndex()

  const fileName = targetPath.split('/').pop()?.replace(/\.[^/.]+$/, '') ?? ''

  for (const note of notes) {
    if (note.path === targetPath) {
      continue
    }

    const absolutePath = resolveNotePath(note.path)

    const content = await fs.readFile(absolutePath, 'utf-8')

    const hasWikiLink = content.includes(`[[${fileName}]]`)

    const hasMarkdownLink = content.includes(targetPath)

    if (hasWikiLink || hasMarkdownLink) {
      linkedNotes.push(note.path)
    }
  }

  return linkedNotes
}
