// src/utils/Logger.ts

import { ILogger } from '../interfaces/ILogger';

export class Logger implements ILogger {
    /**
     * Logs a message to the console.
     * @param message - The message to be logged.
     * @param data - Optional additional data to be logged.
     */
    public log(message: string, data?: any): void {
        if (data) {
            console.log(`INFO: ${message}`, data);
        } else {
            console.log(`INFO: ${message}`);
        }
    }

    /**
     * Logs an error message to the console.
     * @param error - The error message to be logged.
     * @param data - Optional additional data to be logged.
     */
    public error(error: string, data?: any): void {
        if (data) {
            console.error(`ERROR: ${error}`, data);
        } else {
            console.error(`ERROR: ${error}`);
        }
    }

    /**
     * Logs a warning message to the console.
     * @param warning - The warning message to be logged.
     * @param data - Optional additional data to be logged.
     */
    public warn(warning: string, data?: any): void {
        if (data) {
            console.warn(`WARNING: ${warning}`, data);
        } else {
            console.warn(`WARNING: ${warning}`);
        }
    }
}