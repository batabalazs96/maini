type Enviroment = {
    NAME_KEY: any;
    NODE_ENV: string;
    INSTA_API_URL: any;
    INSTA_ACCESS_TOKEN: any;
}

const enviroment: Enviroment = {
    NODE_ENV: process.env.NODE_ENV,
    NAME_KEY: process.env.REACT_APP_NAME_KEY,
    INSTA_API_URL : process.env.REACT_APP_INSTA_API_URL,
    INSTA_ACCESS_TOKEN : process.env.REACT_APP_INSTA_ACCESS_TOKEN,

}

export default enviroment;