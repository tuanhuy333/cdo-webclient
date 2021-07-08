
import axiosClient from "./axiosClient";

// api/productApi.js
// object bth
const employeeApi = {
	getDetails: (params) => {
		const url = '';
		return axiosClient.get(url, {
			params,
			headers: {

			},
			baseURL: "http://localhost:8081/api/employee/findEmployeeById/1"
		});
	},
	getPlace_of_birth: (params) => {
		const url = '';
		return axiosClient.get(url, {
			params,
			headers: {

			},
			baseURL: "https://dc.tintoc.net/app/api-customer/public/provinces"
		});
	},
	updateEmployee: (params, data) => {
		const url = '';
		console.log("a123",data)
		return axiosClient.put(url, data, {
			params,
			headers: {
				"content-Type": "application/json"
			},
			baseURL: "http://localhost:8081/api/employee/UpdateEmployee/1"
		});
	},
	updateImage: (params, data) => {
		const url = '';
		console.log("update image", data)
		return axiosClient.post(url, data, {
			params,
			headers: {
				//'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
				"content-Type": "multipart/form-data",
				// "Accept": "application/json",
				// "type": "formData"
			},
			baseURL: "http://localhost:8081/api/employee/upload/1"
		});
	},
	getAllEmployees: (params) => {
		const url = '';
		return axiosClient.get(url, {
			params,
			headers: {

			},
			baseURL: "http://localhost:8081/api/employee/findAll"
		});
	},
}

export default employeeApi;