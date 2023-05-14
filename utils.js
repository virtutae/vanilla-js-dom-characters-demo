


/** Returns the DOM element with the given id, or errors if not found.
 * @param {string} soughtId 
 * */
export function getElementByIdOrFail(soughtId) {
    const el = document.getElementById(soughtId);
    if (!el) {
        throw new Error("Missing expected DOM element with id: " + soughtId);
    }
    return el
}

