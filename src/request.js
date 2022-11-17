import https from 'node:https'

const request = (
  { hostName, routeName, httpMethod, secretKey, bodyData }
) => {
  let options = {
    hostname: hostName,
    port: 443,
    path: routeName,
    method: httpMethod.toUpperCase(),
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json'
    }
  }

  if (httpMethod.toLowerCase() === "post" || httpMethod.toLowerCase() === "put") {
    // hostName, routeName, httpMethod, secretKey
    options.body = JSON.stringify(bodyData);
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      });
      res.on('end', () => {
        resolve(JSON.parse(data))
      })
    }).on('error', (error) => {
      reject(error);
    })

    if(options.method !== 'GET') {
      req.write(options.body)
    }
    req.end()
  }) 
}

export default request
