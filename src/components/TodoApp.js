/**
 * Created by bradcantor on 2/21/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import TodoTools from "./TodoTools";
import Footer from './Footer';
import TodoHeader from './TodoHeader';
import ActiveFilter from './ActiveFilter';
import * as actionCreators from '../action_creators';

export default class TodoApp extends Component {
    getNbActiveItems(){
        return this.props.todos.filter(
            (item) => item.get('status') === "active"
        ).count();
    }

    render(){
        return <div>
            <TodoHeader addItem={this.props.addItem}/>
            <ActiveFilter activeFilter={this.props.activeFilter}/>
            <section className="todoapp">

                <TodoList {...this.props}/>
                <TodoTools changeFilter={this.props.changeFilter}
                       filter={this.props.filter}
                       nbActiveItems={this.getNbActiveItems()}
                       clearCompleted={this.props.clearCompleted}
                       doneEditing={this.props.doneEditing} />
            </section>
            <Footer/>
        </div>
    }
}
function mapStateToProps(state){
    return {
        todos: state.get('todos'),
        filter: state.get('filter'),
        activeFilter: state.get("activeFilter")
    }
}



export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
