import { useRef } from "react";

export default function Baitap() {
  const sidebarRef = useRef(null);
  const resizeRef = useRef(null);
  const isDown = useRef(false);
  const oldWidth = useRef(220);
  const isOpen = useRef(true);

  const onMouseDown = () => {
    isDown.current = true;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.body.classList.add("select-none");
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    let x = e.clientX;
    if (x < 100) {
      x = 100
    }
    if (x > 350) {
      x = 350
    }
    sidebarRef.current.style.width = x + "px";
    oldWidth.current = x;
  };

  const onMouseUp = () => {
    isDown.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.body.classList.remove("select-none");
  };

  const toggleSidebar = () => {
    if (isOpen.current) {
      oldWidth.current = sidebarRef.current.offsetWidth;
      sidebarRef.current.style.width = "0px";
    } else {
      sidebarRef.current.style.width = oldWidth.current + "px";
    }
    isOpen.current = !isOpen.current;
  };

  return (
    <div className="h-screen w-screen relative">
      <button
        onClick={toggleSidebar}
        className="absolute top-2 left-2 z-50"
      >
        x
      </button>

      <div className="flex h-full">
        <div
          ref={sidebarRef}
          className="js-sidebar w-[220px] bg-gray-200 h-full relative overflow-hidden"
        >
          <h2>Navigation</h2>
          <div
            ref={resizeRef}
            onMouseDown={onMouseDown}
            className="js-resize w-[4px] absolute top-0 right-0 bottom-0
            bg-[gray] z-50 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-all"
          ></div>
        </div>

        <div className="flex-1">
          <h1>Document</h1>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ea voluptatem amet consequuntur, officia reprehenderit accusantium quam sequi maxime tempore perspiciatis, veritatis recusandae reiciendis cupiditate nulla temporibus? Autem, aliquam alias.</h2>
        </div>
      </div>
    </div>
  );
}

// // bài tập: kéo thả tự do trái phải:

// const sidebarEl = document.querySelector(".js-sidebar");
// const resizeEl = sidebarEl.querySelector(".js-resize");

// //1. mousedown --> flag
// //2. mousemove --> check flag
// //3. mouseup --> flag

// //removeEventListener("event-name", handler)

// resizeEl.addEventListener("mousedown", () => {
//     document.addEventListener("mousemove", handler)
//     document.body.classList.add("select-none"); // Khi bấm chuột và di: thêm select none
// })
// document.addEventListener("mouseup", () => {
//     document.removeEventListener("mousemove", handler)
//     document.body.classList.remove("select-none"); // thả chuột: bỏ select none
// })

// const handler = (e) => {
//     // console.log("kéo");
//     // console.log(e.clientX);
//     let x = e.clientX;
//     if (x < 100) {
//         x = 100;
//     }
//     if (x > 350) {
//         x = 350;
//     }
//     sidebarEl.style.width = `${x}px`
    
// }

// buổi sau:
// DOM navigation (parent, nexteleent, children, siblings,....)