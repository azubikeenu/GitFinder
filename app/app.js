import { isValid } from "./utils/isvalid.js";
import Alert from "./services/alert.service.js";
import * as gitView from './views/gitView.js'
export const run = ( git, component ) => {
    component.showProfile( () => {
        const user = component.getUserInput();
        if ( !isValid.isEmpty( user ) ) {
            git.getUser( user ).then( ( { profile, repos } ) => {
                if ( isValid.notFound( profile ) ) {
                    Alert.showAlert( "User not found", "alert alert-danger" )
                } else {
                    // render profile
                    gitView.renderProfile( profile )
                    // render repos
                    gitView.renderRepo( repos )
                }
            } ).catch( err => {
                return Alert.showAlert( "User not found", "alert alert-danger" )
            } )

        } else {
            component.clearProfile();
        }

    } )
}