// src/interfaces/ILogger.ts

export interface ILogger {
    /**
     * Logs a message with optional additional information.
     * @param message - The message to be logged.
     * @param data - Optional additional data to be logged.
     */
    log(message: string, data?: any): void;

    /**
     * Logs an error message with optional additional information.
     * @param error - The error message to be logged.
     * @param data - Optional additional data to be logged.
     */
    error(error: string, data?: any): void;

    /**
     * Logs a warning message with optional additional information.
     * @param warning - The warning message to be logged.
     * @param data - Optional additional data to be logged.
     */
    warn(warning: string, data?: any): void;
}