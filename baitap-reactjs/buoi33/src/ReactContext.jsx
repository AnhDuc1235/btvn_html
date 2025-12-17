import { createContext, useState } from "react";
import Theme from "./components/Theme";

export const Appcontext = createContext();
export default function ReactContext() {
    const [message, setMessage] = useState("F8 - Học React")
  return (
    <Appcontext.Provider value={{
        message,
        setMessage,
    }}>
        <Theme/>
    </Appcontext.Provider>
  )
}

//Props: A -> B -> c -> D
//Context:
//1. Provider --> gửi dữ liệu đi
//2. Consumer --> Lấy dữ liệu từ context
// - class component --> sử dụng component consumer
// - function component --> sử dụng hook useContext hoặc use (react 19)

// Khi component cha bị re-render --> tất cả component con bị re-render
