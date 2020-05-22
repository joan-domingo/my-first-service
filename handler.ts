
// modern module syntax
export async function hello(event, context, callback) {

    // async/await also works out of the box
    await new Promise((resolve, reject) => setTimeout(resolve, 500))

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);
}

// modern module syntax
export async function joan(event, context, callback) {

    // async/await also works out of the box
    await new Promise((resolve, reject) => setTimeout(resolve, 500))

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);
}