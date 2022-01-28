import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;

export default class TaskService {
    static CreateTask(task) {
        return new Promise((resolve) => {
            axios.post(baseURL,task).then((res) => resolve(res.data)).catch((err) => {
                console.log(err);
            });
        });
    }

    static UpdateTask(task) {
        return new Promise((resolve) => {
            axios.put(`${baseURL}/${task.id}`,task).then((res) => resolve(res.data)).catch((err) => {
                console.log(err);
            });
        });
    }

    static DeleteTask(task) {
        return new Promise((resolve) => {
            axios.delete(`${baseURL}/${task.id}`,task).then((res) => resolve(res.data)).catch((err) => {
                console.log(err);
            });
        });
    }

    static GetTasks() {
        return new Promise((resolve) => {
            axios.get(baseURL).then((res) => resolve(res.data)).catch((err) => {
                console.log(err);
            });
        });
    }
}


