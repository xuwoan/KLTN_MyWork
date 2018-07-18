
import { getItem } from '../utils/storage';
let constants = {
    'APP_JSON_HEADER': 'application/json',
    'SAME_ORIGIN': 'same-origin'
};

const HttpCodes = {
    OK: 200,
    UNAUTHORIZED: 401
};

let store;


function showNotifyError(error) {

}

function parseJSON(response) {
    // console.log('parseJSON')
    if (response.constructor.name !== 'Response') {
        return response;
    }

    if (response.statusText === 'No Content') {
        return '';
    }
    // let res = response.json();

    response.json().then(json => ({
        status: response.status,
        json
    })
    );

}

// export function postAvatar(url, type, uri, objName) {
//     return new Promise((resolve, reject) => {
//         try {
//             console.log("************* postAvatar **********:")
//             console.log(url);
//             console.log(type)
//             console.log(uri);
//             postWithFormData(url, type, uri, objName, false).then(function (data) {
//                 console.log("************* postAvatar #### SUCCESSED:")
//                 console.log(data)
//                 resolve(data)
//             }).catch(function (error) {
//                 console.log("************* postAvatar #### FAILED:")
//                 console.log(error);
//                 reject(error)
//             });
//         } catch (err) {
//             console.log('request exception');
//             console.log(err);
//             reject(err);
//         }
//     });
// }

// function postWithFormData() {
//     var url = arguments[0];
//     var method = 'POST';
//     var type = arguments[1];
//     var uri = arguments[2];
//     var objName = arguments[3];
//     var quiet = arguments[4];
//     var userState = store.getState().user;
//     var name = childID + '-avatar.' + uri.split('.').pop()
//     const body = new FormData();
//     body.append(objName, {
//         uri,
//         name,
//         type,
//     });
//     // console.log("userToken:" + token);
//     return fetch(url,
//         {
//             method: method,
//             credentials: constants.SAME_ORIGIN,
//             headers: {
//                 'Accept': 'multipart/form-data',
//                 'Content-Type': 'multipart/form-data',
//             },
//             body: body
//         }).then((response) => {
//             let responsePromise = response.json();
//             return responsePromise.then(json => ({
//                 response: response,
//                 json,
//                 responsePromise: responsePromise,
//             })
//             )
//         })
//         .then(checkStatus.bind({ request: postWithFormData.bind(undefined, url, type, uri, objName, true), quiet: quiet, showNotifyError: showNotifyError }));
// }

function postPut() {
    var uri = arguments[0];
    var method = arguments[1] || 'POST';
    var data = arguments[2] || '';
    var quiet = arguments[3];
    var userState = store.getState().user;


    return fetch(uri,
        {
            method: method,
            credentials: constants.SAME_ORIGIN,
            headers: {
                'Accept': constants.APP_JSON_HEADER,
                'Content-Type': constants.APP_JSON_HEADER,
            },
            body: JSON.stringify(data)
        }).then((response) => {
            let responsePromise = response.json();
            return responsePromise.then(json => ({
                response: response,
                json,
                responsePromise: responsePromise,
            })
            )
        })
        .then(checkStatus.bind({ request: postPut.bind(undefined, uri, method, data, true), quiet: quiet, showNotifyError: showNotifyError }));
}

export function get() {
    console.log("userrrs", store.getState().user)
    var uri = arguments[0];
    var params = arguments[1] || '';
    var quiet = arguments[2];


    if (params) {
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
        if (query)
            uri = uri + '?' + query;

    }


    return fetch(uri,
        {
            method: 'GET',
            credentials: constants.SAME_ORIGIN,
            headers: {
                'Accept': constants.APP_JSON_HEADER,

            }
        })
        .then((response) => {
            console.log(response);
            let responsePromise = response.json();
            return responsePromise.then(json => ({
                response: response,
                json,
                responsePromise: responsePromise,
            })
            )
        })
        .then(checkStatus.bind({ request: get.bind(undefined, uri, true), quiet: quiet, showNotifyError: showNotifyError }));
}

export function post(uri, data = '', quiet = false) {
    return postPut(uri, 'POST', data, quiet);
}

export function put(uri, data = '', quiet = false) {
    return postPut(uri, 'PUT', data, quiet);
}

export function postRequest(url, params) {
    return new Promise((resolve, reject) => {
        try {
            // sleep(5000);
            console.log("************* postRequest **********:")
            console.log(url);
            console.log(params)
            post(url, params).then(function (data) {
                console.log("************* postRequest #### SUCCESSED:")
                console.log(data)
                resolve(data)
            }).catch(function (error) {
                console.log("************* postRequest #### FAILED:")
                console.log(error);
                reject(error)
            });
        } catch (err) {
            console.log('request exception');
            console.log(err)
            reject(err)
        }
    })
}


export function getRequest(url, params) {

    return new Promise((resolve, reject) => {
        try {
            console.log("************* getRequest **********:")
            console.log(url);
            console.log("sgeg", params)
            get(url, params).then(function (data) {
                console.log("************* getRequest #### SUCCESSED:1")
                console.log(data)
                resolve(data)
            }).catch(function (error) {

                console.log("************* getRequest #### FAILED:")
                console.log(error);

                reject(error)
            })
        } catch (err) {
            console.log('request exception');
            console.log(err)
            //should use to
            //catch programmer error
            reject(err)
        }

    })
}



export function setStore(s) {
    store = s;
}


class ExtendableError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.name = this.constructor.name;
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

// now I can extend

export class AppError extends ExtendableError {
    constructor(c, m) {
        super(c, m);
    }
}

export function postuserfromapi(url, params) {
    console.log("COME IN3")

    console.log("P", JSON.stringify(params));

    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(params)

    }).then(
        (response) => {
            console.log("A", response)
            var array = response.status === 200 ? JSON.parse(response._bodyInit) : {};
            if (array.error===false)
                return { "array": array.message, "token": array.token };
            else return {"array": array.message}

        });



    // console.log("B",responsePromise);
    // var array=  responsePromise.status===200? JSON.parse(responsePromise._bodyInit):[];
    // console.log("A",array);
}

export function postdatafromapi(url, params) {
    console.log("POST PARAM", JSON.stringify(params));
    console.log(url);
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(params)

    }).then(
        (response) => {
            console.log("A", response)
            var array = response.status === 200 ? JSON.parse(response._bodyInit) : {};
            if (array.message)
              
                return  array.message ;
        
            else return {} 

        });



    // console.log("B",responsePromise);
    // var array=  responsePromise.status===200? JSON.parse(responsePromise._bodyInit):[];
    // console.log("A",array);
}
export function getuserfromapi(url, token) {
    // var token;
    // getItem("mytoken").then((keyValue) => {
    //     console.log(keyValue) //Display key value
    //     token = keyValue
    // }, (error) => {
    //     console.log(error) //Display error
    // });
    console.log("TOKEN", token)
    console.log("URL", url)
    return  fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': String(token)

        },


    }).then(
        (response) => {
            console.log("A", response)
            var array = response.status === 200 ? JSON.parse(response._bodyInit) : {};
            if (array.message)
                return array.message;
            else return {}

        }

        )


    // console.log("B",responsePromise);
    // var array=  responsePromise.status===200? JSON.parse(responsePromise._bodyInit):[];
    // console.log("A",array);
}

export function getdatafromapi(url, params) {
    console.log("COME IN2")

    if (params) {
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
        if (query)
            url = url + '?' + query;

    }
    console.log(url);
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'

        }

    }).then(
        (response) => {
            console.log("A", response)
            var array = response.status === 200 ? JSON.parse(response._bodyInit) : {};
            if (array.message)
                return array.message;
            else return {}

        }

        )


    // console.log("B",responsePromise);
    // var array=  responsePromise.status===200? JSON.parse(responsePromise._bodyInit):[];
    // console.log("A",array);
}