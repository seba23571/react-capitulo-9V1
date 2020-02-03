import axios from 'axios'
import {API_URL,JPA_API_URL,JPA_API_URL_heroku,API_URL_heroku} from '../../components/all/Constants'

class HelloWorldService {
    
    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get(API_URL_heroku+'/hello-world');        
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get(API_URL_heroku+'/hello-world-bean');        
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(API_URL_heroku+`/hello-world/path-variable/${name}`
        // , 
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );        
    }

}

export default new HelloWorldService()