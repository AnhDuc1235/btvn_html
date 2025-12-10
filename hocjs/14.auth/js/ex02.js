const BASE_URL = `https://api.escuelajs.co/api/v1`
let refreshTokenPromise = null;
const getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token")
    return accessToken
}
const getRefreshToken = () => {
    const refreshToken = localStorage.getItem("refresh_token")
    return refreshToken
}
const removeToken = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
}
const saveToken = (token) => {
    localStorage.setItem("access_token", token.access_token)
    localStorage.setItem("refresh_token", token.refresh_token)
}
const logout = () => {
    removeToken();
    window.location.href = "ex01.html"
}
const renderProfile = (data) => {
    const app = document.querySelector("#app")
    app.innerHTML = `<h1>Chào bạn: <span>${data.name}</span></h1>
    <button>Đăng xuất</button>` 
    const logoutBtn = app.querySelector(`button`)
    logoutBtn.addEventListener("click", logout)
}

const renderLoading = (show = true) => {
    const app = document.querySelector("#app")
    app.innerHTML = `<h1>Loading...</h1>`
}

const getNewToken = async () => {
    try {
        const refreshToken = getRefreshToken()
        const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({refreshToken })
        })
        if (!response.ok) {
            throw new Error("Refresh token failed")
        }
        const data = await response.json();
        return data
    } catch {
        return false
    }
}
const getProfile = async () => {
    try {
        const accessToken = getAccessToken()
        renderLoading()  
        const response = await fetch(`${BASE_URL}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (!response.ok) {
            throw new Error("Unauthorized")
        }
        const data = await response.json()
        renderProfile(data) 
    } catch (error) {
        //xóa token
        //logout()
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken();
        }
        const newToken = await refreshTokenPromise
        if (newToken) {
            
            saveToken(newToken)
            getProfile(); //Gọi lại request profile
        } else {
            logout()
        }
    }
}

getProfile()



//axios: thư viện xử lý  (phần interceptor): sửa lại request, tự động gọi lại request