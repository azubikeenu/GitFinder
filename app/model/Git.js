import { environmentVariables } from '../utils/constants.js'

export default class Git {

    async getUser ( user ) {
        const profileUser = await fetch( `https://api.github.com/users/${user}?client_id=${environmentVariables.clientId}&client_secret=${environmentVariables.clientSecret}` )
        const profile = await profileUser.json()
        return { profile }

    }



}