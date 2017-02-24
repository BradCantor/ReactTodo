/**
 * Created by bradcantor on 2/21/17.
 */
export function toggleComplete(id) {
    return {
        type: 'TOGGLE_COMPLETE',
        id
    }
}

export function changeFilter(filter) {
    return {
        type: 'CHANGE_FILTER',
        filter
    }
}

export function changeACtiveFilter(filter) {
    return {
        type: 'CHANGE_ACTIVE_FILTER',
        filter
    }
}

export function clearCompleted() {
    return {
        type: 'CLEAR_COMPLETED'
    }
}

export function editItem(itemId) {
    return {
        type: 'EDIT_ITEM',
        itemId
    }
}

export function addItem(newText) {
    return {
        type: 'ADD_ITEM',
        newText
    }
}

export function deleteItem(itemId) {
    return {
        type: 'DELETE_ITEM',
        itemId
    }
}

export function cancelEditing(itemId) {
    return {
        type: 'CANCEL_EDITING',
        itemId
    }
}

export function doneEditing(itemId, newText) {
    return {
        type: 'DONE_EDITING',
        itemId,
        newText
    }
}