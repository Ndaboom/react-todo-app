import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;

    const handleEditing = () => {
      handleEditing = () => {
        this.setState({
          editing: true,
        });
      }
    }

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    handleUpdatedDone = event => {
      if (event.key === "Enter") {
        this.setState({ editing: false })
      }
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
            console.log(e.target.value, id)
          }}
        />
      </li>
    )
  }
}

export default TodoItem;