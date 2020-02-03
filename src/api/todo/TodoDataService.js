import axios from 'axios'
import {API_URL,JPA_API_URL,JPA_API_URL_heroku} from '../../components/all/Constants'

class TodoDataService {
    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL_heroku}/users/${name}/todos`);
    }
// update
    retrieveTodo(name,id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL_heroku}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL_heroku}/users/${name}/todos/${id}`);
    }


 updateTodo(name, id , todo ) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL_heroku}/users/${name}/todos/${id}`, todo);
    }

// metodo post
    createTodo(name,  todo ) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL_heroku}/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()