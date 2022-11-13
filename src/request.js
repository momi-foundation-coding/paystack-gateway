import https from 'node:https'

const request = (options) => {
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