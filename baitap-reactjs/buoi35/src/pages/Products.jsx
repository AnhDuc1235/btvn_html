import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const BASE_URL = "https://dummyjson.com/products";
const productDetails = "/san-pham";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const limit = 10;
        const skip = (page - 1) * limit;
        const keywords = searchParams.get("keywords");
        let setRes = "";
        if (keywords) {
          setRes = `${BASE_URL}/search?q=${keywords}&limit=${limit}&skip=${skip}`;
        }
        else {
          setRes = `${BASE_URL}?limit=${limit}&skip=${skip}`;
        }
        const res = await fetch(setRes);
        const data = await res.json();
        setProducts(data.products);
        setTotalPage(data.total);
      } catch {
        setError("co loi xay ra");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, searchParams]);

  const totalPages = Math.ceil(totalPage / 5);

  const handlePages = (page) => {
    setPage(page);
  };

  if (isLoading && products.length === 0) {
    return <span>Dang tai vui long cho...</span>;
  }
  
  //search
  const debounce = (callback, timeout = 500) => {
    let timeoutID;
    return (...args) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        callback(...args);
      }, timeout);
    };
  };

  const Searching = debounce((value, setSearchParams, searchParams) => {
    setSearchParams({
      status: searchParams.get("status"),
      keywords: value,
    });
  }, 500);
  //

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    Searching(value, setSearchParams, searchParams);
  };

  return (
    <div className="w-[80%] m-auto">
      <h1 className="font-bold text-3xl">Sản phẩm</h1>
      <input
        type="search"
        placeholder="Tìm kiếm"
        onChange={handleSearch}
        className="border p-1"
      />
      {/* <p>Status: {searchParams.get("status")}</p>
      <p>Keywords: {searchParams.get("keywords")}</p> */}
      <div className="flex flex-col w-[80%]">
        {error ? (
          <span>{error}</span>
        ) : (
          products.map((product) => {
            return (
              <div key={product.id} className="flex flex-col w-[80%]">
                <img className="w-[50%]" src={product.thumbnail} alt="" />
                <h2 className="font-extrabold">{product.title}</h2>
                <h2 className="font-extrabold">{product.price}</h2>
                <div className="flex justify-between">
                  <button className="text-purple-700 underline cursor-pointer">
                    <NavLink
                      to={productDetails + `/${product.id}`}
                    >
                      Chi tiết
                    </NavLink>
                  </button>
                  <div className="flex gap-5"></div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex gap-2 justify-center w-[60%] flex-wrap m-auto">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePages(i + 1)}
            className={
              page === i + 1
                ? "border p-1 bg-black text-white cursor-pointer"
                : "cursor-pointer"
            }
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
