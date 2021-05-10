function Clientes(cliente, age, job, address) {
    this.cliente = cliente;
    this.age = age;
    this.job = job;
    this.address = address;
}
formDom = {
    name: document.querySelector('#name'),
    age: document.querySelector('#age'),
    job: document.querySelector('#job'),
    address: document.querySelector('#address'),
    buttom: document.querySelector('#btnAddUser'),
};

formDom.buttom.addEventListener('click', e => {
    e.preventDefault();
    if (formDom.name.value && formDom.age.value && formDom.job.value && formDom.address.value) {
        let test = new Clientes(formDom.name.value, formDom.age.value, formDom.job.value, formDom.address.value);
        console.log(test);
    } else {
        alert('Fill all fields');
    }
});
