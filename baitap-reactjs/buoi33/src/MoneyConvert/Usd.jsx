import React, { use } from 'react'
import MoneyConvert, { MoneyContext } from './MoneyConvert'

export default function Usd() {
    const { usd, onChangeVnd } = use(MoneyContext)
  return (
    <div>
        <h2>chuyển usd</h2>
        <input type="number" placeholder='usd...' 
        value={usd}
        onChange={onChangeVnd}/>
    </div>
  )
}
