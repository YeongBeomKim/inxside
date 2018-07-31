import axios from '../defaultClient';

export const createSignedUrl = ({painting_id, filename}) => axios.post('/api/v1.0/files/create-url',{
    painting_id, filename
});

export const upload = ({files,fields}) => axios.post('/api/v1.0/files/upload',{
    files, fields
});