import './App.css';
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults } from './redux/actions/actions';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch()
  const result = useSelector(state => state.result)
  const placeholder = useSelector(state => state.placeholder)

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const clearResults = (e) => {
    if (e.target.value.length === 0) {
      dispatch(getSearchResults(e.target.value.length, e.target.value))
    }
  }

  useEffect(() => {
    dispatch(getSearchResults(0, ''))
  }, [dispatch])

  return (
    <div className="app">
      <Header />


      <div className='maininputdiv'>
        <input
          className="maininput"
          type='text'
          onKeyUp={e => dispatch(getSearchResults(e.target.value.length, e.target.value))}
          onChange={clearResults}
          ref={inputRef}
        />
      </div>

      <div className='displaypanel'>
        {
          placeholder.length > 0 ?
            <h3>{placeholder}</h3>
            :
            result.length > 0 ?
              result.map(({ title, author }, index) => (
                <div className='result' key={index}>
                  <h2>{title}</h2>
                  <p>First Name: {author.firstName}</p>
                  <p>Last Name: {author.surname}</p>
                </div>
              ))

              :
              <h3>No search matched</h3>
        }

      </div>
    </div>
  );
}

export default App;
