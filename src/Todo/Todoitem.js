import React, {useContext} from "react";
import PropTypes from 'prop-types'
import Context from "../contex";
import '../index.css'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'centr',
        padding: '.5rem 1rem',
        border: '2px solid #000',
        borderRadius: '6px',
        marginBottom: '.5rem',
        background: '#FFDAB9'
    },
    input: {
        marginRight: '1rem'
        
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if(todo.completed) {
        classes.push('done')
    }

    return (
    <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input
            type = "CheckBox"
            checked = {todo.completed}
            style={styles.input}
            onChange = {() => onChange(todo.id)}
            />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button className="rm" onClick={() => removeTodo(todo.id)}>
            &times;
        </button>
    </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem