import axios from "axios";
//const API_URL = 'http://localhost:8080';
//const API_URL = 'http://192.168.1.25:8080';
const API_URL = 'https://api-deliver-sds2.herokuapp.com';

function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}

export {
    fetchOrders,
    confirmDelivery,
}
