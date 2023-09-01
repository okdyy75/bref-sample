import React, { useEffect, useState } from 'react'
import { fetchData } from '@/utils/fetchData'
import { fetchApiData } from '@/utils/fetchApiData'
import dogImg from '@/assets/img/dog.png'
import Head from '@/components/Head'


function Index() {
    const [dog, setDog] = useState<Dog>()
    const [healthcheck, setHealthcheck] = useState()

    useEffect(() => {
        Promise.all([
            (async () => {
                const { data: dogs, error } = await fetchData(
                    'https://api.thedogapi.com/v1/images/search?limit=1'
                )
                if (error) {
                    return
                }
                setDog(dogs[0])
            })(),
            (async () => {
                const { data, error } = await fetchApiData('/api/healthcheck')
                if (error) {
                    return
                }
                setHealthcheck(data)
            })(),
        ])
    }, [])

    return (
        <>
            <Head />
            <div>
                <h1>This is the Front Page.</h1>
                <h3>Random dog of the day:</h3>
                <pre>{JSON.stringify(dog)}</pre>
                <div>
                    <img src={dogImg} alt="dog" />
                </div>
                <p>{JSON.stringify(healthcheck)}</p>
            </div>
        </>
    )
}

export default Index
