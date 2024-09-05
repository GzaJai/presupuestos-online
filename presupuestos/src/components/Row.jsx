import { useRef, useState } from "react"

const Row = ({ addRow }) => {

    const [isFilled, setIsFilled] = useState(false)
    const [total, setTotal] = useState('')

    const inputRefQ = useRef(null)
    const inputRefP = useRef(null)


    const handleOnChange = (e) => {
        if (e.target.value != ''){
            if (!isFilled){
                addRow()
                setIsFilled(true)
            }
        }
    }

    const handleTotal = (e) => {
        const quantity = inputRefQ.current.value
        const price = inputRefP.current.value

        setTotal(price*quantity)
    }

  return (
    <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem]">
        <input className="flex-1 p-1" type="text" placeholder="Producto" onChange={handleOnChange}/>
        <input ref={inputRefQ} className="w-[8rem] p-1" type="number" placeholder="Cantidad" onChange={handleTotal}/>
        <input ref={inputRefP} className="w-[8rem] p-1" type="number" placeholder="Precio unitario" onChange={handleTotal}/>
        <span className="w-[8rem] p-1 bg-white" type="number" placeholder="Total" disabled>{total}</span>
    </div>
  )
}
export default Row