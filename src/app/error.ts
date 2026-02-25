export class AppError extends Error {
  public status?: number;
  public details?: any[];
  public isOperational?: boolean;

  constructor(message: string, status: number = 500, details?: any[]) {
    super(message);
    this.status = status;
    this.details = details;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
