type Enviroment = {
    NAME_KEY: any;
    NODE_ENV: string;
}

const enviroment: Enviroment = {
    NODE_ENV: process.env.NODE_ENV,
    NAME_KEY: process.env.REACT_APP_NAME_KEY,
}

export default enviroment;