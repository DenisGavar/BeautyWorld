import { useOrders } from "../OrdersContext";
import { Order } from "./Order"

export function OrdersList() {
    const { orders } = useOrders();

    if (orders?.length === 0) {
        return <p>Нет данных</p>;
    }

    return (
        <>
            <h2>Список заявок</h2>

            <div className="row">
                {orders?.map((item) => (
                    <div key={item.id} className="col">
                        <Order data={item} />
                    </div>
                ))}
            </div>
        </>
    )
}