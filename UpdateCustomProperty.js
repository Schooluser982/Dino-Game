export function getCustomerProperty(elem, prop) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0 
}

export function setCustomerProperty(elem, prop, value) {
    elem.style.setProperty(prop, value)
}

export function incrementCustomerProperty(elem, prop, inc) {
    setCustomerProperty(elem, prop, getCustomerProperty(elem, prop) + inc)  
}