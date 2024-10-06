import { ReactElement, ReactNode } from "react"

interface ListProps<T> {
    // items: (string | number)[]
    items: T[]
}
const List = <T, >({items}: ListProps<T>): ReactElement => {

    // in regular funciton we diont need , 

    // function List<T>({items}:ListProps<T>) {

    // }
    return (
        <>
            <h3>List of </h3>
            {items.map((item, i) => {
                return <div key={i}>{item as ReactNode}</div>
            })}
        </>
    )
}

export default List