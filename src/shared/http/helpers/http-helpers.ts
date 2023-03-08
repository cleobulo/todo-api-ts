import { HttpStatus } from './http-status-helpers';

export const ok = (data: any) => ({
    status: HttpStatus.ok,
    message: 'ok',
    data: data
})

export const created = () => ({
    status: HttpStatus.created,
    message: 'created'
})

export const serverError = (message: string) => ({
    status: HttpStatus.serverError,
    message: message
})

