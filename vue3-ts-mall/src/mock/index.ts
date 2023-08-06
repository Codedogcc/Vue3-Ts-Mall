import Mock from 'mockjs'
import table from './data/table'

Mock.mock('/login', 'post', table.login)


export default Mock
