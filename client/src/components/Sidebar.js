import React, {useContext} from 'react'
import {BookContext} from '../context/BookContext'

function Sidebar(props) {

    const [books, setBooks] = useContext(BookContext)

    const setField = (e) => {
        setBooks({
            ...books,
            search: e.target.value
        })
    }

    return (
        <aside className="sidebar">
            <div className="top-bar">
                <p className="logo">BooKeeda</p>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search..." onChange={setField}/>
                <p className="fa fa-search"></p>
            </div>

            <menu className="menu">
                <p>Library</p>
            </menu>
        </aside>
    )
}

export default Sidebar
