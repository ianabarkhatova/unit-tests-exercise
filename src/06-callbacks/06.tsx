import {findAllByDisplayValue} from "@testing-library/react";
import {ChangeEvent, MouseEvent} from "react";

// const callback = () => {
//     alert('hey')
// }
//
// window.setTimeout( callback  , 1000);

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        // debugger
        //элемент, с которым произошло событие
        alert(event.currentTarget.name)
        // alert("user was deleted")
    }

    const saveUser = () => {
        alert("user was saved")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}>
            Dimych</textarea>

        <input onChange={onAgeChanged} type={'number'}/>

        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>

    </div>
}

