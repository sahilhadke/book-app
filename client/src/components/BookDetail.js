import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router'
import SingleBook from './SingleBook'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import {BookContext} from '../context/BookContext'

function BookDetail() {
    const {id} = useParams()
    const [books, setBooks] = useState()

    const fetchBooks = async () => {
        const axios = require('axios')
        const data = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        console.log(data)
        // setBooks(
        //     data.data.volumeInfo
        // )        
    }

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            fetchBooks()
        }, 0);

        console.log(books)
        return () => clearTimeout(timeOutId);
        
    }, [])

    return (
        <div>
            <div className="window">

                <Sidebar/>

                <div className="main" role="main">
                    <Topbar />

                    <div className="movie-list">
                    <div className="title-bar">
                        <div className="left">
                            <p className="bold">Book Details</p>
                            
                        </div> 
                    </div> 
    
                    <div className='container'>
                        
                    <div className="row">

                        <div className="col-4">
                            {/* <img src={books.imageLinks.smallThumbnail}></img> */}
                        </div>

                        <div className="col-8">

                        </div>

                        {/* <img src={} */}
                        {/* {books.title} */}
                    </div>
                    </div>

                        
                </div> 


                </div>


            </div>
            
        </div>
    )
}

export default BookDetail
