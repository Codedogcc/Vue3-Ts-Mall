import { Random } from 'mockjs'
interface ListType {
  
  name: string,
  password: number,
  
}
const dataList: Array<ListType> = [];
for (let i = 0; i < 100; i++) {
  dataList.push({
    name: Random.cname(),
    password: Random.integer(100000, 800000),
  })
}
export default {
  login: (params: any) => {
    const info = JSON.parse(params.body);
    const [index, size, total] = [info.pageIndex - 1, info.pageSize, dataList.length]
    const len: any = total / size
    const totalPages: number = len - parseInt(len) >= 0 ? parseInt(len) + 1 : len
    const newDataList: Array<ListType> = dataList.slice(index * size, (index + 1) * size)
    return {
      total: dataList.length,
      data: newDataList,
      totalPages: totalPages
    }
  },
  
}
