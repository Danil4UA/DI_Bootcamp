interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => JSX.Element
}

const List = <T,>({ items, renderItem }: ListProps<T>): JSX.Element => {
    return (
        <>
            {items.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
            ))}
        </>
    )
}
export default List