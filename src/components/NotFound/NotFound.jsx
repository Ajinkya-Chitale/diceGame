import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const err = useRouteError();

    return (
        <div>
            <h1 className='text-3xl text-center'>{err.status} - {err.statusText}</h1>
        </div>
    )
}

export default NotFound
