import {greet} from "../greeting.js"
import {makeColorful} from "../colorful-message.js"
import {readMe} from "./read-file.js"

console.log(
    makeColorful(greet("Daniel"))
)

readMe("./file-data.txt")