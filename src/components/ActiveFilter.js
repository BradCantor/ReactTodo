/**
 * Created by bradcantor on 2/24/17.
 */
import React, { PureComponent } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class ActiveFilter extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    _handleOnChange(e) {
        this.setState({value: e.target.value});
        this.props.changeActiveFilter(e.target.value);
    }
    render(){
        return <input type="text" className="edit"
                      autoFocus={true}
                      value={this.state.value}
                      onChange={this._handleOnChange.bind(this)}
                      ref="filterInput"/>
    }

}

