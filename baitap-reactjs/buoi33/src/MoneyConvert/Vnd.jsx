import React, { use } from 'react'
import { Appcontext } from '../ReactContext'
import { MoneyContext } from './MoneyConvert'

export default function Vnd() {
    const { vnd, onChangeVnd } = use(MoneyContext)
  return (
    <div>
        <h2>chuyển vnd</h2>
        <input type="number"
        placeholder='vnd...'
        value={vnd}
        onChange={onChangeVnd} />
    </div>
  )
}
