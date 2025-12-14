const container = ReactDOM.createRoot(document.querySelector("#root"));
const Counter = () => {
  //Trạng thái (State): Thể hiện dữ liệu trong 1 component
  //Khi trạng thái thay đổi --> Component sẽ tự động được kích hoạt gọi lại (re-render)
  //Để quản lý trạng thái -> Dùng hàm React.useState() (Gọi là hook)
  //Cú pháp: const [tenState, hamThayDoiState] = React.useState(giatrimacdinh)
  const [value, setValue] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [data, setData] = React.useState([]);
  const [edit, setEdit] = React.useState(-1);
  const [editValue, setEditValue] = React.useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleChangeEditValue = (e) => {
    setEditValue(e.target.value);
  };
  const handleClickBtn = () => {
    if (!value) {
      setMsg("Vui lòng nhập");
    } else {
      if (data.includes(value)) {
        setMsg("Giá trị đã tồn tại");
      } else {
        setMsg("");
        setData([...data, value]);
        setValue("");
      }
    }
  };

  //xóa item
  const handleDelete = (index) => {
    setData(data.filter((item, _index) => _index !== index));
    // const dataClone = [...data];
    // dataClone.splice(index, 1);
    // setData(dataClone);
  };

  //sửa item
  const handleEdit = (index, item) => {
    setEdit(index);
    setEditValue(item);
  };

  const handleSaveEdit = (index) => {
    if (!editValue) {
      setMsg("không để trống");
    } else {
      if (data.includes(editValue)) {
        setMsg("Giá trị đã tồn tại");
      } else {
        const newdata = [...data];
        newdata[index] = editValue;
        setData(newdata);
        setEdit(-1);
        setMsg("");
      }
    }
  };

  //hủy edit (x)
  const handleCancelEdit = () => {
    setEdit(-1);
    setEditValue("");
  };

  //gach ngang:
  const handerLine = (e) => {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  };

  //check trùng
  //[1,2,3] --> data
  //setData([1,3]) --> [1,3] --> data
  //index = 1 --> [1,3] --> data
  return (
    <div
      style={{
        height: "50vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{display: "flex", flexDirection:"column", fontSize:"30px", gap:"20px", border: "1px solid black", borderRadius: "8px", padding: "50px", backgroundColor: "rgba(30, 23, 32, 0.866)"}}>
        <span style={{textAlign: "center", color: "white"}}>Get things done!</span>
        <div>
          <div style={{display: "flex", justifyContent: "center"}}>
          <input
            placeholder="Nhập gì đó..."
            onChange={handleChangeValue}
            value={value}
            style={{backgroundColor: "rgba(30, 23, 32, 0.866)", border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}}
          />
          <button onClick={handleClickBtn} style={{cursor:"pointer", backgroundColor: "rgba(137, 43, 226, 0.566)",border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}}>Add</button>
          </div>
          <br />
          {msg && <span style={{ color: "red", fontSize:"20px", justifyContent:"center", display:"flex" }}>{msg}</span>}
          {/* <div>Giá trị: {value}</div> */}

          <ul style={{listStyle: "none", padding: "0"}}>
            {data.map((item, index) => {
              const editForm = index === edit;
              const normalUi = (
                <li key={index} style={{marginBottom:"10px", userSelect: "none", display: "flex", alignItems:"center", justifyContent: "space-between", padding: "0", backgroundColor:"rgba(137, 43, 226, 0.566)"}}>
                  <span onClick={handerLine} style={{cursor: "pointer", fontSize:"20px", paddingLeft:"5px", color: "white"}}>{item}</span>{" "}
                  <div style={{display: "flex", alignContent:"center", gap:"5px"}}>
                  <button style={{cursor:"pointer", backgroundColor: "rgba(137, 43, 226, 0.566)",border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}} onClick={() => handleEdit(index, item)}>edit</button>
                  <button style={{cursor:"pointer", backgroundColor: "rgba(137, 43, 226, 0.566)",border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}} onClick={() => handleDelete(index)}>&times;</button>
                  </div>
                </li>
              );

              const editUi = (
                <li key={index} style={{display: "flex", alignItems:"center", justifyContent: "space-between", padding: "0", backgroundColor:"rgba(137, 43, 226, 0.566)"}}>
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleChangeEditValue}
                    style={{backgroundColor: "rgba(137, 43, 226, 0.566)", border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}}
                  />
                  <div style={{display: "flex", alignContent:"center", gap:"5px"}}> 
                  <button style={{cursor:"pointer", backgroundColor: "rgba(137, 43, 226, 0.566)",border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}} onClick={() => handleSaveEdit(index)}>update</button>
                  <button style={{cursor:"pointer", backgroundColor: "rgba(137, 43, 226, 0.566)",border: "2px solid rgba(137, 43, 226, 0.566)", color:"white", padding: "5px"}} onClick={handleCancelEdit}>&times;</button>
                  </div>
                </li>
              );

              return <li key={index}>{editForm ? editUi : normalUi}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
//Fragment
//JSX = JavaScript XML (Trình duyệt không hiểu)
//Javascript Compiler (Babel, SWC,...)
//React: JSX --> React Element --> React DOM --> Browser
const wrapper = (
  <>
    <div>
      <Counter />
      {/* <User name="Anh An" email="an@gmail.com" />
      <User name="Anh Sơn" /> */}
      {/* <Product>
        <h3>Sản phẩm 1</h3>
        <h3>Sản phẩm 2</h3>
      </Product> */}
      {/* {todos.map((todo) => {
        return (
          <h1 key={todo.id}>
            {todo.title}
            <button onClick={() => handleRemove(todo.id)}>&times;</button>
          </h1>
        );
      })}
      <input onChange={handleChangeValue} />
      <button onClick={handleClick}>Click me</button> */}
    </div>
  </>
);
// console.log(wrapper);

container.render(wrapper);
