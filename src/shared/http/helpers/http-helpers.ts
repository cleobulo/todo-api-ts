export const ok = (data: any) => ({
    status: 200,
    message: 'ok',
    data: data
})

export const created = () => ({
    status: 201,
    message: 'created'
})

export const serverError = (message: string) => ({
    status: 500,
    message: message
})

