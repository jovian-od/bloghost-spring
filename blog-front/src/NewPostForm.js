import React, { Component } from 'react'

export default class NewPostForm extends Component {
  constructor (props) {
    super()
    this.state = {title: '', content: '', author: ''}
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange (event) {
    this.setState({author: event.target.value})
  }

  handleContentChange (event) {
    this.setState({content: event.target.value})
  }

  handleTitleChange (event) {
    this.setState({title: event.target.value})
  }

  handleSubmit () {
    var titleOk = true
    var contentOk = true
    var authorOk = true
    console.log(this.state)
    document.getElementById('errorText').innerHTML = ''
    if (this.state.title.length < 3) {
      titleOk = false
      document.getElementById('errorText').innerHTML += '<br />Title must be at least 3 characters long'
    }
    if (this.state.content.length < 3) {
      contentOk = false
      document.getElementById('errorText').innerHTML += '<br />Content must be at least 3 characters long'
    }
    if (this.state.author.length < 3) {
      authorOk = false
      document.getElementById('errorText').innerHTML += '<br />Author must be at least 3 characters long'
    }
    if (titleOk && contentOk && authorOk) {
      this.submit()
    }
  }

  submit () {
    window.alert('things ok')
  }

  render () {
    return (
      <div>
        <input type='text' placeholder='Title' onChange={this.handleTitleChange} /><br /><br />
        <input type='text' placeholder='Content' onChange={this.handleContentChange} /><br /><br />
        <input type='text' placeholder='Name' onChange={this.handleAuthorChange} /><br /><br />
        <button onClick={this.handleSubmit}>Post</button>
        <p id='errorText'>asd</p>
      </div>
    )
  }
}
