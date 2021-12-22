import { nanoid } from 'nanoid';

export function uniqueId () {
    return nanoid();
}

export function contains (array, element) {
    return array.indexOf(element) !== -1;
}
