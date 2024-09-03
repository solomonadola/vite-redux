export const addedBug = 'ADDEDBUG';
export const removedBug = 'REMOVEDBUG';
export const resolvedBug = 'RESOLVEDBUG'

export function addBug() {
    return {
        type: addedBug,
        payload: {
            description: 'added new bug'
        }
    }
}

export function removeBug(id) {
    return {
        type: removedBug,
        payload: {
            id
        }
    }
}

export function resolveBug(id) {
    return {
        type: resolvedBug,
        payload: {
            id
        }
    }
}