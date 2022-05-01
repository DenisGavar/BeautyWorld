import { HttpService } from '../services/http-service';

class OrdersApi extends HttpService {
  constructor() {
    super('orders');
  }

  /**
   * Возвращает список заявок
   */
  getOrders(search = '') {
    return this.get(`?search=${search}`);
  }

  createOrder(orderDto) {
    //const formData = new FormData();
    //Object.keys(orderDto).forEach(key =>  formData.append(key, orderDto[key]));
    return this.post('', orderDto);
  }

  deleteOrder(orderId) {
    return this.delete(orderId);
  }
  
  changeOrder(orderId, orderDto) {
    return this.change(orderId, orderDto);
  } 
}

export default new OrdersApi();