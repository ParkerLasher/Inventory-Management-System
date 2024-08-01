import axios from "axios";

const API_URL = "https://inventory.parkerlasher.com/api/suppliers";

const getAllSuppliers = () => {
  return axios.get(API_URL);
};

const getSupplierById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createSupplier = (supplier) => {
  return axios.post(API_URL, supplier, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const updateSupplier = (id, supplier) => {
  return axios.put(`${API_URL}/${id}`, supplier, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deleteSupplier = (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
