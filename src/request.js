import https from 'node:https'

const request = (
  { hostName, routeName, httpMethod, secretKey, bodyParamsData }
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
    options.body = JSON.stringify(bodyParamsData);
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

    if(options.method !== 'GET' && options.body !== undefined) {
      req.write(options.body)
    }
    req.end()
  }) 
}

export default request
