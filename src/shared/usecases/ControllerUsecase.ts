import { Request, Response } from 'express';

export interface ControllerUsecase {
    handle: (request: Request, response: Response) => Promise<Response>; 
}
