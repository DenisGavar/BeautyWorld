import { useOrders } from "../OrdersContext"

export function OrdersFilter() {
    const { search, setSearch } = useOrders();

    return(
        <>
            <h2>Поиск</h2>
            <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Введите имя"
            />
            <p></p>
        </>)

}