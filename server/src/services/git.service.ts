import { simpleGit, SimpleGit } from "simple-git";
import { NOTES_REPOSITORY_PATH } from "../config/paths.js";

const git: SimpleGit = simpleGit(NOTES_REPOSITORY_PATH);
// Stages files and creates a Git commit.

export async function commitChanges(files: string[], message: string,): Promise<void> {
  await git.add(files)

  await git.commit(message)
}
