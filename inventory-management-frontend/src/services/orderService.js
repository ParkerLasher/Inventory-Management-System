import axios from 'axios';

const API_URL = 'https://inventory.parkerlasher.com/api/orders';

const getAllOrders = () => {
    return axios.get(API_URL);
};

const getOrderById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createOrder = (order) => {
    return axios.post(API_URL, order);
};

const updateOrder = (id, order) => {
    return axios.put(`${API_URL}/${id}`, order);
};

const deleteOrder = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};