/**
 * Created by bradcantor on 2/21/17.
 */
import { Map } from 'immutable';

function findItemIndex(state, itemId) {
    return state.get('todos').findIndex(
        (item) => item.get('id') === itemId
    );
}

function setState(state, newState) {
    return state.merge(newState);
}

function toggleComplete(state, itemId){
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get("todos")
        .get(itemIndex)
        .update('status', status => status === 'active' ? 'completed' : 'active')

    return state.update('todos', todos => todos.set(itemIndex,updatedItem))
}

function changeFilter(state, filter){
    return state.set("filter", filter)
}

function changeActiveFilter(state, filter){
    return state.set("activeFilter", filter)
}

function clearCompleted(state){
    return state.update("todos",todos  =>  todos.filterNot(
        (item) => item.get('status') === 'completed'
    ))
}

function editItem(state, itemId){
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get("todos")
        .get(itemIndex)
        .set('editing', true);
    return state.update("todos", todos  => todos.set(itemIndex, updatedItem));
}

function deleteItem(state, itemId){
    const itemIndex = findItemIndex(state, itemId);
    return state.update("todos", todos  => todos.remove(itemIndex));
}

function doneEditing(state, itemId, newText){
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get("todos")
        .get(itemIndex)
        .set("text", newText)
        .set('editing', false);
    return state.update("todos", todos  => todos.set(itemIndex, updatedItem));
}

function cancelEditing(state, itemId){
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get("todos")
        .get(itemIndex)
        .set('editing', false);
    return state.update("todos", todos  => todos.set(itemIndex, updatedItem));
}

function addItem(state, newText){
    const itemId = state.get('todos').reduce((maxId, item) => Math.max(maxId,item.get('id')), 0) + 1;
    const newItem = Map({"id" : itemId, "text" : newText, 'status': 'active'});
    return state.update("todos", (todos)  => todos.push(newItem));
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
            return toggleComplete(state, action.id);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
        case 'CHANGE_ACTIVE_FILTER':
            return changeFilter(state, action.filter);
        case 'CLEAR_COMPLETED':
            return clearCompleted(state);
        case 'EDIT_ITEM':
            return editItem(state, action.itemId);
        case 'DELETE_ITEM':
            return deleteItem(state, action.itemId);
        case 'ADD_ITEM':
            return addItem(state, action.newText);
        case 'CANCEL_EDITING':
            return cancelEditing(state, action.itemId);
        case 'DONE_EDITING':
            return doneEditing(state, action.itemId, action.newText);
    }
    return state;
}