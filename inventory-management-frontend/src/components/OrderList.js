import React, { useEffect, useState } from 'react';
import orderService from '../services/orderService';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService.getAllOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4">Order List</h1>
      <ul className="list-group">
        {orders.map((order) => (
          <li key={order.id} className="list-group-item">
            Order ID: {order.id}, Name: {order.supplier.name}, Supplier ID: {order.supplier.id}, Total: {order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;