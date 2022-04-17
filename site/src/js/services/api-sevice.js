import { API_PATH } from '../constants';
import { HttpService } from './http-service';

class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

    /*
    Возвращает список сотрудников
    */
    getMasters() {
        return this.get('staff');
    }

    /*
    Возвращает список услуг
    */
    getServices() {
        return this.get('services');
    }

    /*
    Отправляет форму записи
    */
    createOrder(orderData) {
        return this.post('orders', orderData);
    }
}

export default new ApiService();