import { useRef, useState, useEffect } from "react"
import '../../../presupuestos/src/index.css'

const Row = ({ rowId, saveRow, removeRow, getTableTotal, budgetData, editing }) => {
    const [isFilled, setIsFilled] = useState(false)
    const [total, setTotal] = useState(0.0)
    const [inputsDisabled, setInputsDisabled] = useState(!editing)

    const inputRefQuantity = useRef(null)
    const inputRefPrice = useRef(null)
    const inputRefProduct = useRef(null)

    useEffect(() => {
        if (budgetData != null) {
            const rowData = budgetData.items[rowId]
            inputRefQuantity.current.value = rowData.quantity
            inputRefPrice.current.value = rowData.salePrice
            inputRefProduct.current.value = rowData.description
            setTotal(rowData.quantity * rowData.salePrice)
        }

    }, [])

    const checkFilledRow = () => {        
        if (inputRefQuantity.current.value == '' || inputRefPrice.current.value == '' || inputRefProduct.current.value == ''){
            return false
        }
        setIsFilled(true)
        return true
    }

    const handleOnChange = () => {
        const quantity = parseFloat(inputRefQuantity.current.value) || 0;
        const price = parseFloat(inputRefPrice.current.value) || 0;
        const totalValue = quantity * price;
    
        setTotal(totalValue);
        saveRow(rowId, inputRefProduct.current.value, quantity, price, totalValue, checkFilledRow());
    };

    const handleClear = () => {
        inputRefQuantity.current.value = ''
        inputRefPrice.current.value = ''
        inputRefProduct.current.value = ''
        setTotal(0)
    }

  return (
    <div className="w-full mx-auto text-sm flex gap-[.2rem] py-[.1rem]">
        <span className="h-[2rem] w-[2rem] text-center p-2 rounded bg-white">{rowId+1}</span>
        <input ref={inputRefProduct} disabled={inputsDisabled} className="h-[2rem] placeholder:text-center flex-1 p-2 rounded border-[1px] border-custom-gray" type="text" placeholder="Producto" onChange={handleOnChange} />
        <input ref={inputRefQuantity} disabled={inputsDisabled} className="h-[2rem] w-[8rem] text-center no-spin p-2 rounded border-[1px] border-custom-gray" type="number" placeholder="Cantidad" onChange={handleOnChange}/>
        <input ref={inputRefPrice} disabled={inputsDisabled} className="h-[2rem] w-[8.5rem] text-center no-spin p-2 rounded border-[1px] border-custom-gray" type="number" placeholder="Precio unitario" onChange={handleOnChange}/>
        <span className="h-[2rem] w-[8.5rem] text-center p-2 bg-white rounded border-[1px] border-custom-gray" type="number" disabled>{total!=0?'$'+total:''}</span>

        {editing && 
            <span className="h-[2rem] w-[2rem] my-auto p-1 bg-yui-900 text-white text-xl font-bold text-center rounded-xl hover:cursor-pointer" onClick={removeRow}>X</span>
        }
    </div>
  )
}
export default Row