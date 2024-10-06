import { ReactElement } from "react"

type HeadingProps = {
    title: string
    subTitle: string
}

const Heading = (props: HeadingProps): ReactElement => {
    const {title, subTitle} = props

    return (
        <>
            <h2>Title: {title} </h2>
            <h3>SubTitle: {subTitle}</h3>
        </>
    )
}

export default Heading