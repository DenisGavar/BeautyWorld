import { useEffect } from "react";
import ordersApi from "../../../api/orders-api";
import { useMasters } from "../../masters/MastersContext";
import { useInput } from '../../../hooks';

export function OrdersForm({ order }) {
    const name = useInput('');
    const phone = useInput('');
    const masterId = useInput('');
    const serviceId = useInput('');
    const visitDate = useInput('');

    useEffect(() => {
        //Object.keys(master).forEach(key => this[key]?.setValue(master[key]));
    }, [order]);

    // Пытаюсь таким образом получить список мастеров, чтобы они бли доступны в форме выбора
    // Но список пустой
	const masters = useMasters();     
	
    const options = masters?.map((master) => {
        return <option key={master.id}>{master.fullName}</option>;
    });

    function handleForm(event) {
        event.preventDefault();
        ordersApi.createOrder({ name, phone, masterId, serviceId, visitDate });
    }

    return (<>    
        <h2>Новая заявка</h2>
 
        <form onSubmit={handleForm}>
            <label>
                <span>Имя</span>
                <input {...name} />
            </label>
            <br />

            <label>
                <span>Телефон</span>
                <input {...phone} />
            </label>
            <br />

            <label>
                <span>Мастер</span>
                <select {...masterId}>
                    {options}
                </select>
            </label>
            <br />

            <label>
                <span>Услуга</span>
                <input type="number" {...serviceId} />
            </label>
            <br />

            <label>
                <span>Дата визита</span>
                <input type="date" {...visitDate} />
            </label>
            <br />

            <button>Добавить</button>
        </form>
    </>);
}