import path from 'node:path'

import {NOTES_REPOSITORY_PATH} from '../config/paths.js'


 //Converts a relative note path into a safe absolute path.
 //Throws an error if the path escapes the notes repository.
 
export function resolveNotePath(notePath: string): string {
  const absolutePath = path.resolve(NOTES_REPOSITORY_PATH, notePath)

  if (!absolutePath.startsWith(NOTES_REPOSITORY_PATH)) {
    throw new Error('Invalid note path.')
  }

  return absolutePath
}
