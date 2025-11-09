const blogList = document.getElementById("blog-list");
const btnLatest = document.getElementById("btn-latest");
const btnOldest = document.getElementById("btn-oldest");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");
const btnAdd = document.getElementById("btn-new");

let posts = [];
let originalPosts = [];

const searchEl = document.querySelector("#search");
let currentPage = 1;
const postsPerPage = 5;

const modalContent = document.getElementById("modal-content");

const inputContainer = document.createElement("div");
inputContainer.id = "input-container";
modalContent.insertBefore(inputContainer, modalTitle.nextSibling);

const titleInput = document.createElement("input");
titleInput.id = "post-title-input";
titleInput.placeholder = "title";
titleInput.className = "post-input";
inputContainer.appendChild(titleInput);

const bodyTextarea = document.createElement("textarea");
bodyTextarea.id = "post-body";
bodyTextarea.placeholder = "content";
bodyTextarea.className = "post-text";
inputContainer.appendChild(bodyTextarea);

const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";
buttonContainer.className = "modal-actions";
modalContent.appendChild(buttonContainer);

const saveButton = document.createElement("button");
saveButton.id = "save-post-button";
saveButton.innerText = "Lưu";
saveButton.className = "btn-save";

const cancelButton = document.createElement("button");
cancelButton.innerText = "Hủy";
cancelButton.className = "btn-cancel";
cancelButton.onclick = function () {
  modal.style.display = "none";
};
buttonContainer.appendChild(saveButton);
buttonContainer.appendChild(cancelButton);

if (modalTitle) {
  modalTitle.style.display = "none";
}
if (modalBody) {
  modalBody.style.display = "none";
}

function toggleModalView(isForm) {
  if (isForm) {
    titleInput.style.display = "block";
    bodyTextarea.style.display = "block";
    saveButton.style.display = "block";
    cancelButton.style.display = "block";
    modalTitle.style.display = "none";
    modalBody.style.display = "none";
  } else {
    titleInput.style.display = "none";
    bodyTextarea.style.display = "none";
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    modalTitle.style.display = "block";
    modalBody.style.display = "block";
  }
}

function getPostsPerPage() {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return posts.slice(startIndex, endIndex);
}

// sửa xóa lưu
function deletePost(id) {
  if (confirm("Bạn có muốn xóa blog không")) {
    posts = posts.filter(function (p) {
      return p.id !== id;
    });
    originalPosts = originalPosts.filter(function (p) {
      return p.id !== id;
    });
    if (getPostsPerPage().length === 0 && currentPage > 1) {
      currentPage--;
    }
    renderPosts(getPostsPerPage());
    renderPage();
    alert("Đã xóa");
  }
}

function editPostModal(id) {
  toggleModalView(true);
  const post = posts.find(function (p) {
    return p.id === id;
  });
  if (post) {
    titleInput.value = post.title;
    bodyTextarea.value = post.body;
    saveButton.onclick = function () {
      savePost(id, "edit");
    };
    modal.style.display = "flex";
  }
}

// tạo id khi thêm mới blog
function renderId() {
  let maxId = 0;
  for (let i = 0; i < originalPosts.length; i++) {
    if (originalPosts[i].id > maxId) {
      maxId = originalPosts[i].id;
    }
  }
  return maxId + 1;
}

function savePost(id, select) {
  const newTitle = titleInput.value.trim();
  const newBody = bodyTextarea.value.trim();
  if (!newTitle || !newBody) {
    alert("không được để trống");
    return;
  }
  let updatedPost;
  if (select === "add") {
    updatedPost = {
      id: renderId(),
      userId: 1,
      title: newTitle,
      body: newBody,
    };
    posts.unshift(updatedPost);
    originalPosts.unshift(updatedPost);
  } else if (select === "edit") {
    const postIndex = posts.findIndex(function (p) {
      return p.id === id;
    });
    const originalPostIndex = originalPosts.findIndex(function (p) {
      return p.id === id;
    });
    if (postIndex !== -1) {
      posts[postIndex].title = newTitle;
      posts[postIndex].body = newBody;
    }
    if (originalPostIndex !== -1) {
      originalPosts[originalPostIndex].title = newTitle;
      originalPosts[originalPostIndex].body = newBody;
    }
  }

  modal.style.display = "none";
  if (btnLatest.classList.contains("active")) {
    posts.sort(function (a, b) {
      return b.id - a.id;
    });
  } else {
    posts.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  renderPosts(getPostsPerPage());
  renderPage();
}


function renderPage() {
    let totalPages = Math.floor(posts.length / postsPerPage);
    const remainder = posts.length % postsPerPage;
    if (remainder > 0) {
        totalPages++;
    }
    if (posts.length > 0 && totalPages === 0) {
        totalPages = 1;
    }

    let pages = document.getElementById("pages");
    if (!pages) {
        pages = document.createElement("div");
        pages.id = "pages";
        pages.className = "page-container";
        blogList.parentNode.insertBefore(pages, blogList.nextSibling);
    }
    let html = "";
    for (let i = 1; i <= totalPages; i++) {
        let activeClass = "";
        if (i === currentPage) {
            activeClass = " active";
        }
        html += `<button onclick="goToPage(${i})" class="page-btn${activeClass}">${i}</button>`;
    }
    pages.innerHTML = html;
}

// chuyển trang
function goToPage(page) {
  currentPage = page;
  renderPosts(getPostsPerPage());
  renderPage();
}

// thêm mới
btnAdd.addEventListener("click", function () {
  toggleModalView(true);
  titleInput.value = "";
  bodyTextarea.value = "";
  saveButton.onclick = function () {
    savePost(null, "add");
  };
  modal.style.display = "flex";
});

async function getPosts() {
  const Response = await fetch("https://dummyjson.com/posts");
  const data = await Response.json();
  posts = data.posts;
  originalPosts = [...posts];
  posts.sort(function (a, b) {
    return b.id - a.id;
  }); // để mặc định thằng mới nhất active trước

  renderPosts(getPostsPerPage());
  renderPage();
}

function renderPosts(list) {
  let html = "";
  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    html += `<div class="blog-item">
    <h3>${p.title}</h3>
    <p>${p.body}...</p>
    <span class="blog-button">
      <button class="btn-detail" onclick="viewDetail(${p.id})">Xem chi tiết</button>
      <div class="button-funtion">
        <button class="btn-edit" onclick="editPostModal(${p.id})">Sửa</button>
        <button class="btn-delete" onclick="deletePost(${p.id})">Xóa</button>
      </div>
    </span>
    </div>`;
  }

  blogList.innerHTML = html;
}

// xem chi tiết
async function viewDetail(id) {
  toggleModalView(false);
  const post = posts.find(function (p) {
    return p.id === id;
  });
  if (post) {
    modalTitle.innerText = post.title;
    modalBody.innerText = post.body;
  }

  modal.style.display = "flex";
}

//đóng modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

btnLatest.addEventListener("click", function () {
  btnLatest.classList.add("active");
  btnOldest.classList.remove("active");
  posts.sort(function (a, b) {
    return b.id - a.id;
  });
  renderPosts(getPostsPerPage());
  renderPage();
});

btnOldest.addEventListener("click", function () {
  btnLatest.classList.remove("active");
  btnOldest.classList.add("active");
  posts.sort(function (a, b) {
    return a.id - b.id;
  });
  renderPosts(getPostsPerPage());
  renderPage();
});

//search

const debounce = (callback, timeout = 500) => {
  let timeoutID
  return (...args) => {
    //rest parameter
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      callback(...args) //spread
    }, timeout)
  }
}
const addSearchEvent = () => {
  const searchEl = document.querySelector("#search")
  searchEl.addEventListener("input", debounce( async (e) => {
    const value = e.target.value.trim()
    if (value) {
        const Response = await fetch(`https://dummyjson.com/posts/search?q=${value}`);
        const data = await Response.json();
        posts = data.posts;
        currentPage = 1;
        renderPosts(getPostsPerPage());
        renderPage();
    } else {
        await getPosts();
    }
  }))

}

getPosts();
addSearchEvent();
