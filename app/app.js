import { isValid } from "./utils/isvalid.js";
import Alert from "./services/alert.service.js";
export const run = ( git, component ) => {

    const user = component.getUserInput();
    if ( !isValid.isEmpty( user ) ) {
        component.showProfile( () => {
            git.getUser( user ).then( ( { profile, repos } ) => {
                if ( Alert.showAlert() )
                // render profile

                // render repos

            } )

        } )

    } else {


    }
    // check if query is not empty





}