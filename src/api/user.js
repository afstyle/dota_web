import http from '@/common/request';

export const login = data => http.post('/b/user/login', data)	// 登录

export const logout = data => http.post('/b/user/logout', data)	// 登出

export const getPermissionMenu = data => http.get('/b/user/getPermissionMenu', { token: data })	// 获取用户权限菜单

export const getUserInfo = data => http.get('/b/user/getBUserByToken')	// 获取用户信息

