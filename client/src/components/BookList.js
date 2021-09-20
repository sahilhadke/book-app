import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'

import SingleBook from './SingleBook'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import {BookContext} from '../context/BookContext'

function BookList() {

    const [books, setBooks] = useContext(BookContext)

    const fetchBooks = async () => {
        const axios = require('axios')
        var keyword = books.search.split(' ').join('+')
        const data = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+keyword)
        setBooks({
            ...books,
            books: data.data.items
        })
        
    }

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            fetchBooks()
        }, 500);
        return () => clearTimeout(timeOutId);

        
    }, [books])

    return (
        <div>
            <div className="window">

                <Sidebar/>

                <div className="main" role="main">
                    <Topbar />

                    <div className="movie-list">
                    <div className="title-bar">
                        <div className="left">
                            <p className="bold">Search Results</p>
                            
                        </div> 
                    </div> 
    
                    <div className='container'>
                        
                    <div className="row">
                        {/* {books.search} */}
                    {
                       books.books &&
                        books.books.map((item) => {
                            return <div className="col-2">
                                <Link to={`/detail/${item.id}`}>
                                    <SingleBook item={item}></SingleBook>
                                </Link>
                            </div>
                        })
                    }
                    </div>
                    </div>

                        
                </div> 


                </div>


            </div>
            
        </div>
    )
}

export default BookList
