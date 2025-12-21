import { useSearchParams } from 'react-router-dom'

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSearch = (e) => {
        const value = e.target.value
        setSearchParams({
            status: searchParams.get("status"),
            keywords: value
        })

    }
  return (
    <div>
        <h1>Produtcs</h1>
        <input
         type="search" 
         placeholder='nhập từ khóa...'
         onChange={handleSearch}
        />
        <p>Status: {searchParams.get("status")}</p>
        <p>Keywords: {searchParams.get("keywords")}</p>
    </div>
  )
}
