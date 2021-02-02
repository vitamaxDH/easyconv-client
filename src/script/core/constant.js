const WENT_WRONG = 'Something went wrong. ';

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
}
