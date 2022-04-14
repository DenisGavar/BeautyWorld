class Customer {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
      }
}

const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('signUpName').value;
    const phone = document.getElementById('signUpPhone').value;
    let customer = new Customer(name, phone);
    console.log(customer);
})
