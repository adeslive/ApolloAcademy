import {ErrorField} from '../generated/graphql'

const ErrorMap = (errors: ErrorField[]) => {
    const map : Record<string, string> = {};
    errors.forEach(({field, message}) => {
        map[field] = message;
    })
    
    return map;
}

export default ErrorMap;