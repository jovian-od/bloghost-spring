import React, { Component } from 'react'
import NewPostForm from './NewPostForm'
import ListPosts from './ListPosts'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NewPostForm />
        <ListPosts />
      </div>
    )
  }
}

export default App
