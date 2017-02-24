/**
 * Created by bradcantor on 2/21/17.
 */
/**
 * Created by bradcantor on 2/21/17.
 */
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from "classnames";
import TextInput from "./TextInput";

export default class  TodoItem extends  Component{
    constructor(props) {
        super(props);
       // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        var itemClass = classNames({
            'todo': true,
            'completed': this.props.isCompleted,
            'editing': this.props.isEditing
        })
        return <li className={itemClass}>
            <div>
                <input type="checkbox"
                       className="toggle"
                       checked={this.props.isCompleted}
                       onChange={() => this.props.toggleComplete(this.props.id)}/>
                {!this.props.isEditing ?
                <label htmlFor="todo"
                       ref="text"
                       onDoubleClick={ ()=>this.props.editItem(this.props.id)}>
                    {this.props.text}
                </label> : "" }
                <button className="destroy"
                        onClick={() => this.props.deleteItem(this.props.id)}>
                </button>
            </div>
            <TextInput text={this.props.text}
                       itemId={this.props.id}
                       cancelEditing={this.props.cancelEditing}
                       doneEditing={this.props.doneEditing} />
        </li>
    }
}
