// index.ts里面暴露的service
import service from ".";
interface loginData {
  username: string,
  password: string
}

export function getUserInfo() {
  return service(
    {
      url: "/userinfo",
      method: "get"
    },
  )
}

export function login(data: loginData) {
  return service(
    {
      url: "/login",
      method: "post",
      data
    },

  )
}