import { useRef, useState } from "react"
import '../../../presupuestos/src/index.css'

const Row = ({ rowId, addRow, done, removeRow}) => {

    const [isFilled, setIsFilled] = useState(false)
    const [total, setTotal] = useState('')

    const inputRefQ = useRef(null)
    const inputRefP = useRef(null)
    const inputRefProduct = useRef(null)

    const handleOnChange = (e) => {
        if (e.target.value != ''){
            if (!isFilled){
                addRow()
                setIsFilled(true)
            }
        }        
    }

    const handleTotal = () => {
        const quantity = inputRefQ.current.value
        const price = inputRefP.current.value

        setTotal(price*quantity)
    }

    const handleClear = () => {
        inputRefQ.current.value = null
        inputRefP.current.value = null
        inputRefProduct.current.value = ''
        setTotal(0)
    }

  return (
    <div 
    className={`w-[90%] mx-auto flex gap-[.2rem] py-[.1rem]  ${done ? 'disabled' : ''}`}
    >
        <input ref={inputRefProduct} className="input-center flex-1 p-2 rounded" type="text" placeholder="Producto" onChange={handleOnChange} />
        <input ref={inputRefQ} className="input-center w-[8rem] p-2 rounded" type="number" placeholder="Cantidad" onChange={handleTotal}/>
        <input ref={inputRefP} className="input-center w-[8rem] p-2 rounded" type="number" placeholder="Precio unitario" onChange={handleTotal}/>
        <span className="w-[8rem] p-2 bg-white rounded" type="number" disabled>{total!=0?'$'+total:''}</span>

        {!done && (
                rowId !== 1 ? (
                    <span className="w-[2rem] bg-red-600 text-white text-2xl font-bold text-center rounded-xl" onClick={removeRow}>X</span>
                ) : (
                    <span className="w-[2rem] bg-red-600 text-white text-2xl font-bold text-center rounded-xl" onClick={handleClear}>X</span>
                ))}
    </div>
  )
}
export default Row