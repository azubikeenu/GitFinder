import { debounce } from "../utils/debounce.js";
import { DOMStrings } from "../utils/constants.js";
export default class UIComponent {
    constructor() {
        this.input = document.getElementById( 'searchUser' );
    }
    getUserInput () {
        return this.input.value;
    }
    showProfile ( func ) {
        this.input.addEventListener( 'keyup', debounce( func ) )
    }
    clearProfile () {
        DOMStrings.profile.innerHTML = "";
    }
}