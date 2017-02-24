import React from 'react';

export default class TodoHeader extends React.PureComponent {
    _handleKeyPress(e) {
        if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
            const itemText = this.refs.addTodoInput.value;
            this.refs.addTodoInput.value = '';
            return this.props.addItem(itemText);
        }
    }
    render() {
        return <header className="header">
            <h1>Todos</h1>
            <input className="new-todo"
                   ref="addTodoInput"
                   autoFocus
                   autoComplete="on"
                   placeholder="What needs to be done?"
                   onKeyPress = {this._handleKeyPress.bind(this)} />
        </header>
    }
};



// const TodoHeader = (props) => {
//     const  _handleAddItem = (e) => {
//         props.value = e.target.value;
//         if (e.key === 'Enter') {
//
//             return props.addItem(e.target.value);
//         }
//     };
//     return (
//              <header className="header">
//                  <h1>todos</h1>
//                  <input className="new-todo"
//                         autofocus
//                         autoComplete="off"
//                         placeholder="What needs to be done?"
//                         onKeyPress = {_handleAddItem} />
//              </header>
//         )};
//
// export default TodoHeader