// index.ts里面暴露的service
import service from ".";
import mockRequests from "@/mock/mockservice";
interface loginData {
  username: string,
  password: string
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

