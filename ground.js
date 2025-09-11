import { getCustomerProperty, incrementCustomerProperty, setCustomerProperty } from "./UpdateCustomProperty.js"

const SPEED = 0.05
const groundElems = document.querySelectorAll("[data-ground]")

export function setpGround() {
    setCustomerProperty(groundElems[0], "--left", 0)
    setCustomerProperty(groundElems[1], "--left", 300)

}
export function updateGround(delta, speedScale) {
    groundElems.forEach(ground => {
        incrementCustomerProperty(ground, "--left", delta * speedScale * SPEED * -1)

        if(getCustomerProperty(ground, "--left") <= -300) {
            incrementCustomerProperty(ground, "--left", 600)
        }
        
    });

}