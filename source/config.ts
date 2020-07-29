import { readFile, writeFile } from './fileSystem';
import { pathTo } from './paths';
import { Generic } from './interfaces';

export class Configuration {
    path: string;
    raw: string;
    config: Generic;
    constructor() {
        this.path = pathTo('config.json');
        try {
            this.raw = readFile(this.path);
            this.config = JSON.parse(this.raw);
        } catch(e) {
            // Log a failed config load!
        }
    }
    /**
     * Get a key from the configuration.
     * @param key The key of the query
     * @param dValue Fallback value (Defaults to FALSE)
     */
    get(key: string, dValue: any = false): any {
        if(this.config[key]) {
            return this.config[key];
        }
        return dValue;
    }
    /**
     * Set a value to the configuration.
     * @param key The key of the value
     * @param value The set value
     */
    set(key: string, value: any): void {
        this.config[key] = value;
    }
    /**
     * Save the current configuration to file.
     */
    save(): void {
        let toSave: string = JSON.stringify(this.config, null, 4);
        if(toSave !== this.raw) {
            writeFile(this.path, toSave);
        }
    }
}