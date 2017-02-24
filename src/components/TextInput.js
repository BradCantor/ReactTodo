
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class TextInput extends Component{
    constructor(props) {
        super(props);
        this.state = {value: props.text};
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    doneEditing(){
        this.setState({'value': this.props.text})
        return this.props.doneEditing(this.props.itemId, this.state.value);
    }
    _handleOnChange(e) {
        this.setState({value: e.target.value});
    }
    _handleKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                return this.props.doneEditing(this.props.itemId, this.state.value);
            case 'Escape':
                return this.props.cancelEditing(this.props.itemId);
        }
    }
    _handleOnBlur(e) {
        return  this.props.cancelEditing(this.props.itemId);
    }
    render(){
        return <input type="text" className="edit"
                      autoFocus={true}
                      value={this.state.value}
                      onChange={this._handleOnChange.bind(this)}
                      ref="itemInput"
                      onKeyDown={this._handleKeyDown.bind(this)}
                      onBlur={this._handleOnBlur.bind(this)}/>
    }

}


