import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '@/utils/fetchData'
import Head from '@/components/Head'

function DogsBreed() {
    const { breed } = useParams()
    const [filteredDogs, setFilteredDogs] = useState<Dog[]>([])

    useEffect(() => {
        ;(async () => {
            const { data: dogs, error } = await fetchData(
                'https://api.thedogapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50'
            )
            if (error) {
                return
            }
            if (!breed) {
                return
            }
            const reg = new RegExp(breed, 'g')
            const filteredDogs = dogs.filter((dog) => dog.id.toLowerCase().match(reg))
            console.log('filteredDogs', filteredDogs)
            setFilteredDogs(filteredDogs)
        })()
    }, [])
    return (
        <>
            <Head title={`${breed} Dog`} description={`You are ${breed} hello 👋`} />
            <h2>Dog breed: { breed }</h2>
            <ul>
                {filteredDogs.map((dog: Dog) => (
                    <li key={dog.id}>
                        <img src={dog.url} alt="" width="320" />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DogsBreed
