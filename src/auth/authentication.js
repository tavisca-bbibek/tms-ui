export const ROLE_ADMIN = 'ADMIN';
export const ROLE_USER = 'USER';


class Authentication {

    getUser(){
        return localStorage.getItem('user');
    }

    logout(){
        localStorage.removeItem('user');
    }

    login(username, password){
        //Api call;
        const user = {name: 'Anoop', role: ROLE_ADMIN, username, password};
        console.log(user);
        localStorage.setItem('user', user);
    }
}

const authentication = new Authentication();
export default authentication;