import { join } from 'path';

export const root = join(__dirname, '..');

export function pathTo(...parts: string[]): string {
    return join(root, ...parts);
}
