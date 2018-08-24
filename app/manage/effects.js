import { Effect } from 'jumpstate'
import request from './request'

const login = Effect('login', values => request('/auth', 'POST', values))

export default { login }
