import axios from "axios";

const URL: string = "http://localhost:7500/api/v2";

export const createTodo = (data: {}) => {
    try {
        return axios.post(`${URL}/create-todo`, data)
    } catch (error) {
        console.log(error)
    }
}

export const viewTodos = async () => {
   try {
    return axios.get(`${URL}/read-todos`).then((res) =>{
        // console.log(res);
        return res.data.data
    });
   } catch (error) {
        console.log(error)
   } 
}

export const updateTodo = (Id: any) => {
 try {
    console.log("update");
    return axios.patch(`${URL}/update-todo/:todoId${Id}`).then((res) => {
        console.log(res)
    })
 } catch (error) {
    console.log(error)
 }
}