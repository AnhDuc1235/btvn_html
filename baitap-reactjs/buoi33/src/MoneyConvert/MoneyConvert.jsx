import React, { createContext, useState } from 'react'
import Vnd from './Vnd'
import Usd from './Usd'

export const MoneyContext = createContext();
const usd_rate = 26000
export default function MoneyConvert() {
    const [vnd, setVnd] = useState(0) 
    const [usd, setUsd] = useState(0) 
    const handleChangeVnd = (e) => {
        setVnd(e.target.value)
        setUsd(e.target.value / usd_rate)
    }
    const handleChangeUsd = (e) => {
        setVnd(e.target.value)
        setUsd(e.target.value * usd_rate)
    }
  return (
    <div>

    <MoneyContext.Provider value={{
        usd,
        vnd,
        onChangeVnd: handleChangeVnd,
        onChangeUsd: handleChangeUsd
    }}>
        <Vnd/>
        <Usd/>
    </MoneyContext.Provider>
    </div>
  )
}

