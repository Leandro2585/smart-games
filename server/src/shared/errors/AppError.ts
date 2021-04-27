export class AppError extends Error {
  constructor(message: string){
    super(`AppError: ${message}`)
    this.name = 'AppError';
  }
}