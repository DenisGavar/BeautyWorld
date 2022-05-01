import React, { useState, useEffect, useContext } from 'react';
import { createContext } from "react";
import OrdersApi from '../../api/orders-api';

export const OrdersContext = createContext(null);

export function OrdersProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        OrdersApi.getOrders(search).then(setOrders);
    }, [search]);

    function hideOrder(orderId) {
        const filteredOrders = orders.filter((order) => order.id !== orderId);
        setOrders(filteredOrders);
    }

    function deleteOrder(orderId) {
        OrdersApi.deleteOrder(orderId);
        // Не получается обновить список заявок
        // Не понимаю, какой метод надо вызвать
        //OrdersApi.getOrders(search).then(setOrders);
    }

    function changeOrder(orderId, orderDto) {
        // Отправляю в теле просто ту же самую дату для проверки, но
        // Ошбика "Unexpected token o in JSON at position 1"
        // Непонятно, что за ошибка
        OrdersApi.changeOrder(orderId, orderDto);
    }    

    return <OrdersContext.Provider value={{ orders, deleteOrder, hideOrder, changeOrder, search, setSearch }}>
        {children}
    </OrdersContext.Provider>
}

export const useOrders = () => useContext(OrdersContext);