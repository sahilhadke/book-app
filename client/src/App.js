import {BrowserRouter as Router, Route} from 'react-router-dom'
import {BookProvider} from './context/BookContext'

import BookList from './components/BookList'
import BookDetail from './components/BookDetail'

function App() {
  return (
    <BookProvider>
      <Router>
          <div className="app">
            <Route path='/' exact>
              <BookList />
            </Route>
            <Route path='/detail/:id' exact>
              <BookDetail />
            </Route>
          </div>
      </Router>
    </BookProvider>
   
  );
}

export default App;
