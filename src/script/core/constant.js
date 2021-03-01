const WENT_WRONG = 'Something went wrong.';
const REG_FAIL = 'Registration failed.';

export const ItemTypes = {
    BOX: 'box',
}

export const Modal = {
    FILE_WARN: {
        title: WENT_WRONG,
        body: 'Please select at least one file.'
    }
    ,
    SERVER_ERROR: {
        title: WENT_WRONG,
        body: 'The server is offline at the moment.'
    }
    ,
    REGISTRATION : {
        FAIL :{
            username : {
                title : REG_FAIL,
                body : 'User name is not valid.'
            },
            email : {
                title : REG_FAIL,
                body : 'Email is not valid.'
            },
            password : {
                title : REG_FAIL,
                body : 'Password is not valid.'
            },
            password_not_match : {
                title : REG_FAIL,
                body : 'Passwords do not match.'
            },
        }
    }
}
