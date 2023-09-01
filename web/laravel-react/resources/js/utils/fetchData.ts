type fetchDataResponse = {
    data?: any | string
    error?: Error
}

export const fetchData = async (url: string, options?: RequestInit) => {
    const { data, error }: fetchDataResponse = await fetch(url, options)
        .then(async (response: Response) => {
            if (!response.ok) {
                throw new Error(`[${response.status}] ${response.statusText}`)
            }
            console.log('Success', response)
            const contentType = response.headers.get('content-type') ?? ['text/plain']
            const data = contentType.includes('application/json')
                ? await response.json()
                : await response.text()
            return { data }
        })
        .catch((error: Error) => {
            console.log('Error', error)
            return { error }
        })
    return { data, error }
}
