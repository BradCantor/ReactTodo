import React, { Component } from "react";
import classNames from "classnames";

export default class TodoTools extends Component {
    getNbItemsLeft() {
        return this.props.nbActiveItems || 0;
    }
    isSelected(filter) {
        return this.props.selectedFilter === filter || false;
    }
    setSelectedClass(filter) {
        return classNames({'selected': this.props.filter === filter});
    }
    render() {
        return <footer className="footer">
            <div className="todo-count">
                <strong>{this.getNbItemsLeft()}</strong> items left
            </div>
            <ul className="filters">
                <li>
                    <a href="#"
                       onClick={() => this.props.changeFilter('all')}
                       className={this.setSelectedClass('all')}>
                        All
                    </a>
                </li>
                <li>
                    <a href="#"
                       onClick={() => this.props.changeFilter('active')}
                       className={this.setSelectedClass('active')}>
                        Active
                    </a>
                </li>
                <li>
                    <a href="#"
                       onClick={() => this.props.changeFilter('completed')}
                       className={this.setSelectedClass('completed')}>
                        Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed"
                    onClick={this.props.clearCompleted}>
                Clear completed
            </button>
            </footer>
    }
}
/**
 * Created by bradcantor on 2/21/17.
 */
