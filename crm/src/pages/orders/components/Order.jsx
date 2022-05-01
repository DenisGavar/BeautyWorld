import React from 'react';
import { useOrders } from '../OrdersContext';

export function Order({ data }) {
  const { id, customer, visitDate, status, master, service } = data;
  const { hideOrder } = useOrders();
  const { deleteOrder } = useOrders();
  const { changeOrder } = useOrders();

  return (

      <div className="order">

        <h3 className="">{customer.surName} {customer.firstName} {customer.patronymic}</h3>
        
        <p className="">{visitDate}</p>
        
        <p className="">{status}</p>
      
        <p className="">{master.surName} {master.firstName}</p>
        
        <p className="">{service.name}</p>

        <button className="" onClick={() => hideOrder(id)}>
          Удалить фильтром
        </button>

        <button className="" onClick={() => deleteOrder(id)}>
          Удалить непосредственно
        </button>

        <button className="" onClick={() => changeOrder(id, { visitDate } )}>
          Изменить дату
        </button>

      </div>

  );
}