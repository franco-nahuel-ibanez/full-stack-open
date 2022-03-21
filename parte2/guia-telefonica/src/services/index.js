import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';

export const getAll = async() => {
    const res = await axios.get(baseUrl);
    return await res.data;
};

export const addPerson = async person => {
    const res = await axios.post(baseUrl, person);
    return await res.data;
};  

export const update = async (id, newPerson) => {
    console.log(id);
    await axios.put(`${baseUrl}/${id}`, newPerson);
};

export const deleteById = async id => {
    await axios.delete(`${baseUrl}/${id}`);
}