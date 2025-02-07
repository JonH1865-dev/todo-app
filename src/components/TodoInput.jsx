import { useState } from "react"

export function TodoInput (props) {
    const {handleAdd} = props
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    return(
        <div className="input=container">
            <input value={inputValue} 
            onChange={(e) => {setInputValue(e.target.value)}} 
            placeholder="Add task" />
                <> </>

            <button onClick={() => {
                if (!inputValue) {return}
                handleAdd(inputValue)
                setInputValue('')
                }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}