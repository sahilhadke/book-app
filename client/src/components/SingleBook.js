import React from 'react'
import bookPlaceholder from '../book.png'


function SingleBook({item}) {
    console.log(item)
    return (
        <div className='single-book'>
            <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : bookPlaceholder}></img>
            {/* <p>{item.volumeInfo.title}</p> */}
        </div>
    )
}

export default SingleBook
