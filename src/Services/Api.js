import axios from 'axios';

const BASE_URL = "https://products-web-api.azurewebsites.net/api";

export const fetchProducts = () => axios.get(`${BASE_URL}/product`);
export const fetchReviewsByProductId = (id) => axios.get(`${BASE_URL}/review/ReviewsByProduct/${id}`);
export const postProduct = (product) => axios.post(`${BASE_URL}/product`, product);
export const postReview = (review) => axios.post(`${BASE_URL}/review`, review);