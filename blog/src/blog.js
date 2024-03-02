import React, { Component } from 'react';
import './blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      body: '',
      reminder: '',
      color: '#ffffff'
    };
  }

  componentDidMount() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.setState({ notes: JSON.parse(storedNotes) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  addNote = () => {
    const { title, body, reminder, color } = this.state;
    const creationDate = new Date().toLocaleString();
    const newNote = {
      title,
      body,
      reminder,
      color,
      creationDate
    };
    this.setState(prevState => ({
      notes: [...prevState.notes, newNote],
      title: '',
      body: '',
      reminder: ''
    }));
  };

  removeNote = index => {
    const updatedNotes = [...this.state.notes];
    updatedNotes.splice(index, 1);
    this.setState({ notes: updatedNotes });
  };

  render() {
    const { notes, title, body, reminder, color } = this.state;

    return (
    
      <div className="p1">
        <h1 id="h">Blog Application</h1>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            size="9"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <br />
        </div>
        <div>
          <label>Body:</label>
          <br />
          <textarea
            value={body}
            onChange={e => this.setState({ body: e.target.value })}
          />
          <br />
        </div>
        <div>
          <label>Reminder:</label>
          <br />
          <input
         
            type="datetime-local"
            value={reminder}
            onChange={e => this.setState({ reminder: e.target.value })}
          />
          <br />
        </div>
        <div>
          <label>Color:</label>
          <br />
          <input
            type="color"
            value={color}
            onChange={e => this.setState({ color: e.target.value })}
          />
        </div>
        <button onClick={this.addNote} className="b">
          publish!
        </button>

        <div id="notes-container">
          {notes.map((note, index) => (
            <div key={index} className="note" style={{ backgroundColor: note.color }}>
              <span className="remove-btn" onClick={() => this.removeNote(index)}>
                Remove
              </span>
              <strong>{note.title}</strong>
              <p>{note.body}</p>
              {note.reminder && <p>Reminder: {note.reminder}</p>}
              <p>Created on: {note.creationDate}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
