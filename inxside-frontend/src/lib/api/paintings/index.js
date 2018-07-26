import  axios from 'axios';

export const uploadPainting = ({title,description,paintingUri,date}) => axios.post('/api/v1.0/painting',{
    title, description, paintingUri, date
});

export const editPainting = ({id,title,description,paintingUri,date}) => axios.patch(`/api/v1.0/painting/${id}`,{
    title, description, paintingUri, date
});

export const deletePainting = (id) => axios.delete(`/api/v1.0/painting/${id}`);

export const parsePaintings = () => axios.get('/api/v1.0/painting/list');

export const setPainting = (id) => axios.get(`/api/v1.0/painting/${id}`)
