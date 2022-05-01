import { OrdersForm, OrdersList, OrdersFilter } from './components';
import { OrdersProvider } from './OrdersContext';

export function OrdersPage() {
    return (
        <>
            <h1>Заявки</h1>

            <OrdersProvider>
                <OrdersForm />
                <OrdersFilter />
                <OrdersList />
            </OrdersProvider>
        </>
    );
}