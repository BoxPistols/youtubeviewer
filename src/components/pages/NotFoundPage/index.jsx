import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <>
        <h1>Not Found!</h1>
        <div>
            <Link to='/'>Top Page</Link>
        </div>
    </>
)

export default NotFoundPage
