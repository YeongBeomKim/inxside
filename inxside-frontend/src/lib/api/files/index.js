import axios from '../defaultClient';

export const createSignedUrl = ({paintingId, filename}) => {
    return axios.post('/api/v1.0/files/create-url',{painting_id: paintingId, filename});
};

export const upload = ({files,fields}) => axios.post('/api/v1.0/files/upload',{
    files, fields
}); 