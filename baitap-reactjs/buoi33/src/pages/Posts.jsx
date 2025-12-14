import { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://dummyjson.com/posts";

const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [postDetail, setPostDetail] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [mode, setMode] = useState(null);
  const [dataBlog, setDataBlog] = useState({
    title: "",
    body: "",
  });
  const [sortType, setSortType] = useState("desc");

  const searchApi = async (value) => {
    try {
      if (!value) {
        setPage(1);
        const limit = 5;
        const res = await fetch(`${BASE_URL}?limit=${limit}&skip=0`);
        const data = await res.json();
        setPosts(data.posts);
        setTotalPage(data.total);
      } else {
        const res = await fetch(`${BASE_URL}/search?q=${value}`);
        const data = await res.json();
        setPosts(data.posts);
        setTotalPage(data.total);
      }
    } catch {
      setError("co loi xay ra");
    }
  };

  const debouncedSearch = useCallback(
    debounce((value) => searchApi(value)),
    []
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const limit = 5;
        const skip = (page - 1) * limit;
        const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
        const data = await res.json();
        setPosts(data.posts);
        setTotalPage(data.total);
      } catch {
        setError("co loi xay ra");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const handleClick = (post) => {
    setPostDetail(post);
    setIsOpenModal(true);
  };

  const handleOut = () => {
    setIsOpenModal(false);
    setPostDetail(null);
    setMode(null);
  };

  const handlePages = (page) => {
    setPage(page);
  };

  const totalPages = Math.ceil(totalPage / 5);

  const handleDelete = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmit = async (currentId) => {
    if (mode === "add") {
      const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dataBlog, userId: 5 }),
      });
      const data = await res.json();
      setPosts((prev) => [data, ...prev]);
    }
    if (mode === "edit") {
      const res = await fetch(`${BASE_URL}/${currentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataBlog),
      });
      const data = await res.json();
      setPosts((prev) => prev.map((p) => (p.id === currentId ? data : p)));
    }
    setMode(null);
    setDataBlog({ title: "", body: "" });
  };

  const handleAddMode = () => {
    setMode("add");
    setDataBlog({
      title: "",
      body: "",
    });
  };

  const handleEditMode = (id) => {
    setMode("edit");
    setId(id);
    const post = posts.find((p) => p.id === id);
    if (post) {
      setDataBlog({
        title: post.title,
        body: post.body,
      });
    }
  };

  const onSearchChange = (e) => {
    debouncedSearch(e.target.value.trim());
  };

  const sortedPosts = [...(posts || [])].sort((a, b) =>
    sortType === "asc" ? a.id - b.id : b.id - a.id
  );

  if (isLoading && posts.length === 0) {
    return <span>Dang tai vui long cho...</span>;
  }

  return (
    <div>
      <h1 className="w-full text-center mt-10 mb-10 text-4xl">Blog Cua toi</h1>

      <div className="w-[30%] flex m-auto flex-col items-start gap-5 mb-10">
        <input
          type="text"
          placeholder="Nhap ket qua tim kiem..."
          className="w-full border p-2"
          onChange={onSearchChange}
        />
        <button onClick={handleAddMode} className="border rounded-sm p-1">
          Them moi
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => setSortType("desc")}
            className={`border rounded-sm p-1 ${
              sortType === "desc"
                ? "bg-black text-white cursor-pointer"
                : "cursor-pointer"
            }`}
          >
            Moi nhat
          </button>
          <button
            onClick={() => setSortType("asc")}
            className={`border rounded-sm p-1 ${
              sortType === "asc"
                ? "bg-black text-white cursor-pointer"
                : "cursor-pointer"
            }`}
          >
            cu nhat
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[80%] m-auto">
        {error ? (
          <span>{error}</span>
        ) : (
          sortedPosts.map((post) => {
            return (
              <div
                key={post.id}
                className="flex flex-col border gap-[5px] p-2 mb-5"
              >
                <h2 className="font-extrabold">{post.title}</h2>
                <h3>{post.body}</h3>
                <div className="flex justify-between mt-5">
                  <button
                    onClick={() => handleClick(post)}
                    className="border rounded p-2 cursor-pointer"
                  >
                    Xem chi tiet
                  </button>
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleEditMode(post.id)}
                      className="font-bold cursor-pointer"
                    >
                      Sua
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="font-bold cursor-pointer text-red-600"
                    >
                      Xoa
                    </button>
                  </div>
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

      <div>
        {isOpenModal ? (
          <>
            <div
              onClick={handleOut}
              className="fixed inset-0 bg-black opacity-20"
            ></div>
            {postDetail ? (
              <div
                className="border p-5 rounded-xl bg-white fixed top-[30%] left-[20%] w-[60%] "
                key={postDetail.id}
              >
                <div className="flex justify-between items-end mb-5">
                  <h2 className="font-bold text-2xl">{postDetail.title}</h2>
                  <button
                    onClick={handleOut}
                    className="cursor-pointer text-4xl"
                  >
                    &times;
                  </button>
                </div>

                <h3>{postDetail.body}</h3>
              </div>
            ) : (
              <span>loading...</span>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        {mode === "add" && (
          <div>
            <div
              onClick={handleOut}
              className="fixed inset-0 bg-black opacity-20"
            ></div>
            <div className="border p-5 rounded-xl bg-white fixed top-[30%] left-[20%] w-[60%] flex flex-col">
              <button
                onClick={handleOut}
                className="cursor-pointer text-4xl flex justify-end"
              >
                &times;
              </button>
              <div className="flex flex-col gap-2">
                <input
                  className="border p-1"
                  type="text"
                  placeholder="title"
                  value={dataBlog.title}
                  onChange={(e) =>
                    setDataBlog({
                      title: e.target.value,
                      body: dataBlog.body,
                    })
                  }
                />
                <textarea
                  type="text"
                  className="border p-1"
                  placeholder="body"
                  value={dataBlog.body}
                  onChange={(e) =>
                    setDataBlog({
                      title: dataBlog.title,
                      body: e.target.value,
                    })
                  }
                />
                <button
                  className="flex justify-end cursor-pointer"
                  onClick={() => handleSubmit()}
                >
                  Them moi
                </button>
              </div>
            </div>
          </div>
        )}
        {mode === "edit" && (
          <div>
            <div
              onClick={handleOut}
              className="fixed inset-0 bg-black opacity-20"
            ></div>
            <div className="border p-5 rounded-xl bg-white fixed top-[30%] left-[20%] w-[60%] flex flex-col">
              <button
                onClick={handleOut}
                className="cursor-pointer text-4xl flex justify-end"
              >
                &times;
              </button>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="border p-1"
                  placeholder="title"
                  value={dataBlog.title}
                  onChange={(e) =>
                    setDataBlog({
                      title: e.target.value,
                      body: dataBlog.body,
                    })
                  }
                />
                <textarea
                  type="text"
                  className="border p-1"
                  placeholder="body"
                  value={dataBlog.body}
                  onChange={(e) =>
                    setDataBlog({
                      title: dataBlog.title,
                      body: e.target.value,
                    })
                  }
                />
                <button
                  className="flex justify-end cursor-pointer"
                  onClick={() => handleSubmit()}
                >
                  Luu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Posts;
