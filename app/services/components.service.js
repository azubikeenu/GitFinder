import { debounce } from "../utils/debounce.js";
export default class UIComponent {
    constructor() {
        this.profile = document.getElementById( 'profile' );
        this.input = document.getElementById( 'searchUser' );
    }
    getUserInput () {
        return this.input.value;
    }
    showProfile ( func ) {
        this.input.addEventListener( 'keyup', debounce( func ) )
    }
    clearProfile () {
        this.profile.innerHTML = "";
    }

}