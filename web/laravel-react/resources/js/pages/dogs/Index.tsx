import React, { useEffect, useState } from 'react'
import Head from '@/components/Head'
import { fetchData } from '@/utils/fetchData'

function Dogs() {
    const [dogs, setDogs] = useState<Dog[]>([])

    useEffect(() => {
        ;(async () => {
            const { data: dogs, error } = await fetchData(
                'https://api.thedogapi.com/v1/images/search?size=thumb&limit=10'
            )
            if (error) {
                return
            }
            setDogs(dogs)
        })()
    }, [])
    return (
        <>
            <Head title="Show all dogs!" description="Hello Dogs 👋" />
            <h1>Here you have all dogs.</h1>
            <ul>
                {dogs.map((dog: Dog, index) => (
                    <li key={dog.id}>
                        <img src={dog.url} alt="" width="320" />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Dogs
