import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';

// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: '',
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么 token
	},
	(error) => {
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		
	},
	(error) => {
		// 对响应错误做点什么
		
	}
);

// 导出 axios 实例
export default service;
