import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState({
        search: '',
        books: []
    })
    return(
        <BookContext.Provider value={[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}
