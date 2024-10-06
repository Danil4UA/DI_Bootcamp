import { ReactElement, ReactNode } from "react"

interface SectionProps {
    // ReactNode is bigger the just Element 
    children: ReactNode
    content: string
}
const Section = ({children, content}: SectionProps): ReactElement => {
    return (
        <>
            <section>{children}{content}</section>
        </>
    )
}

export default Section