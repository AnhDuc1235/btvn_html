import type React from "react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { User } from "./Todos";

type Props = {
    name: string,
    email: string,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
export default function User({ name, email }:Props) {
    const [value, setValue] = useState<null | string>(null) //dùng state
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
        
    }
  return (
    <div>
        <p>{name}</p>
        <p>{email}</p>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeValue}/>
        </form>
    </div>
  )
}
