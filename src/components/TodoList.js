/**
 * Created by bradcantor on 2/21/17.
 */
/**
 * Created by bradcantor on 2/21/17.
 */
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    getItems() {
        console.log(this.props.activeFilter);
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) => ((this.props.filter === 'all'|| item.get('status') === this.props.filter)
                    && (item.get("text").includes(this.props.activeFilter) || this.props.activeFilter==""))
            );
        }
        return [];
    }
    isCompleted(item){
        return item.get("status") == "completed";
    }
    isEditing(item){
        return item.get("status") == "editing";
    }
    render(){
        return <section className="main">
            <ul className="todo-list">
                {this.getItems().map(item =>
                <TodoItem key={item.get('id')}
                          text={item.get('text')}
                          id={item.get('id')}
                          isCompleted={this.isCompleted(item)}
                          doneEditing={this.props.doneEditing}
                          cancelEditing={this.props.cancelEditing}
                          isEditing={item.get("editing")}
                          toggleComplete={this.props.toggleComplete}
                          deleteItem ={this.props.deleteItem}
                          editItem={this.props.editItem}/>)}
            </ul>
        </section>
    }
}
