import { DOMStrings } from "../utils/constants.js";
export default class Alert {
    static showAlert ( message, className ) {
        this.clearAlert();
        const div = document.createElement( 'div' )
        div.className = className;
        div.appendChild( document.createTextNode( message ) );
        DOMStrings.container.insertBefore( div, DOMStrings.search );
        // remove after 3 secs
        setTimeout( () => {
            this.clearAlert()
        }, 3000 )

    }

    static clearAlert () {
        const currAlert = document.querySelector( '.alert' );
        if ( currAlert ) {
            currAlert.remove();
        }
    }
}