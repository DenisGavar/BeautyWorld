import ApiService from '../services/api-sevice';

class Customer {
    constructor(name, phone, masterId, serviceId, visitDate) {
        this.name = name;
        this.phone = phone;
        this.masterId = masterId;
        this.serviceId = serviceId;
        this.visitDate = visitDate;
      }
}

export class OrderForm {
    constructor() {
        this.formEl = document.getElementById('order-form');
        this.nameInput = this.formEl.elements.name;
        this.phoneInput = this.formEl.elements.phone;
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;
        this.visitDateInput = this.formEl.elements.visitDate;
       // добавить объект лоадера (сначала в index.html, тут меняем видимость? надо посмотреть урок)

        this._init();
        this._bindEvents();
    }

    _init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    _bindEvents() {
        this.formEl.addEventListener('submit', event => {
            event.preventDefault();
 
            const name = this.nameInput.value;
            const phone = this.phoneInput.value;
            const masterId = this.mastersSelect.value;
            const serviceId = this.servicesSelect.value;
            const visitDate = this.visitDateInput.value;

            const data = new Customer(name, phone, masterId, serviceId, visitDate);
            console.log(data);           
            ApiService.createOrder(data);
        });
    }

    async _buildMastersSelect() {
        const masters = await ApiService.getMasters();
    
        masters.forEach(master => {
          const option = document.createElement('option');
          option.value = master.id;
          option.textContent = master.fullName;
          this.mastersSelect.add(option);
        });
    }

    async _buildServicesSelect() {
        const services = await ApiService.getServices();
    
        services.forEach(service => {
          const option = document.createElement('option');
          option.value = service.id;
          option.textContent = service.name;
          this.servicesSelect.add(option);
        });
    }
}