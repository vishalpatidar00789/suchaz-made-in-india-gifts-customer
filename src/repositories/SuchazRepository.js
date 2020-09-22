import axios from 'axios';
//live
/*const baseDomain = 'http://45.76.97.89:1337';*/
//beta
const baseDomain = `${process.env.API_URL}`;
//local
/*const baseDomain = 'http://localhost:1337';*/
const authorization_prefix = 'Bearer ';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDY0YzZhY2MyNTJlMGMwNDQwYjRmOSIsInJvbGUiOlsiYWRtaW4iXSwiaWF0IjoxNTkzNzk1OTc0LCJleHAiOjE2MDE1NzE5NzR9.hJv_XzEwV5I0HB_XPPZiqMbIlHFc78slO_wb055Fnz4';

export const customHeaders = {
    Accept: 'application/json',
    Authorization: authorization_prefix + token
};

export const suchazBaseUrl = `${baseDomain}`;

export default axios.create({
    suchazBaseUrl,
    headers: customHeaders,
});

export const suchazSerializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
