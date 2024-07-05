import {useState} from "react";


export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type DestructuringProps = {
    title: string
    man: ManType
    food: Array<string>
    car: {title: string}
};

export const Destructuring = (props: DestructuringProps) => {
    const {title, man, ...restProps} = props
    // const {title} = props
    // const {name} = props.man
    // const {title, man} = props
    // const {title, man: {name}} = props

    const[message, setMessage] = useState<string>("hello")

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.title}</div>
            <div>{props.food}</div>
        </div>
    );
};