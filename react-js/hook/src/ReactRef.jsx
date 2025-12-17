import { useEffect, useRef, useState } from "react";

// export default function ReactRef() {
//   const countRef = useRef(1);
//   const [count, setCount] = useState(0);
//   const handleIncre = () => {
//     setCount(count + 1)
//     countRef.current++
//   }
//   console.log(countRef);
  
//   return (
//     <div>
//         <h1>React Ref</h1>
//         <button onClick={handleIncre}>Click me</button>
//     </div>
//   )
// }
const data = ["item1","item2"]
export default function ReactRef() {
    const inputRef = useRef()
    const itemsRef = useRef([])
    const btnRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
    let id = setTimeout(() => {
        itemsRef.current.forEach((el) => {
            el.style.color = "red"
        })
    }, 3000)
    return () => {
        clearTimeout(id)
    }
    
  }, [])
  
  return (
    <div >
        <input type="text" placeholder="Nhap gi do..." ref={inputRef}/>
        <ul>
            {data.map((item, index) => {
                return <li ref={(el) => {
                    if (itemsRef.current.length < data.length) {
                        itemsRef.current.push(el);
                    }
                }}
                key={index}>
                    {item}
                </li>
            })}
        </ul>
        <button ref={btnRef}/>
    </div>
  )
}

//states
//- state thay đổi --> component re-render
// - re-render --> state lấy giá trị cuối cùng của lần render trước

//ref: useRef()
// - giữ được giá trị sau mỗi lần re-render
// - không kích hoạt re-render khi thay đổi
// - tham chiếu đến phần tử DOM --> thao tác với DOM browser
