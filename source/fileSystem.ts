import { readFileSync, writeFileSync } from 'fs';

/**
 * Read the content of a file in UTF-8 text.
 * @param path Path to the file
 */
export function readFile(path: string): string {
    return readFileSync(path, { encoding: 'utf-8' });
}

/**
 * Write content to a file
 * @param path Path to the file
 * @param content Content of file
 */
export function writeFile(path: string, content: string): void {
    writeFileSync(path, content);
}
