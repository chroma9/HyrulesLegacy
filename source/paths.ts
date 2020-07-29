import { join } from 'path';

export const root = join(__dirname, '..');

/**
 * Path to a file, based on ROOT folder.
 * @param parts Arguments as strings
 */
export function pathTo(...parts: string[]): string {
    return join(root, ...parts);
}