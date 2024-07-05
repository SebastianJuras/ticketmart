import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 503;
    reason = "Error connecting to database";

    constructor(){
        super('Error connecting to a database');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}

// Database connection error subclass of Error