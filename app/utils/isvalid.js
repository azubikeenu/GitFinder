export const isValid = {
    isEmpty: arg => ( arg === '' ) ? true : false,
    notFound: arg => ( arg.message === 'Not Found' ) ? true : false
}
