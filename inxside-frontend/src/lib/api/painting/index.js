import  axios from 'axios';

export const uploadPainting = (payload) => axios.post('/api/v1.0/painting', payload);

export const editPainting = ({id, ...payload}) => axios.patch(`/api/v1.0/painting/${id}`,payload);

export const deletePainting = (id) => axios.delete(`/api/v1.0/painting/${id}`);

export const parsePaintings = () => axios.get('/api/v1.0/painting/list');

export const setPainting = (id) => axios.get(`/api/v1.0/painting/${id}`)
