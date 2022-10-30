import https from 'node:https'
import dotenv from 'dotenv'

dotenv.config()

const params = JSON.stringify({
  email: "customer@email.com",
  amount: "20000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
}

const request = https.request(options, (res: any) => {
  let data = ''
  res.on('data', (chunk: any) => {
    data += chunk
  });
  res.on('end', () => {
    // console.log({ data })
    // console.log(JSON.parse(data))
  })
}).on('error', (error: any) => {
  // console.log({ error })
  throw error
})

interface Resource {
  [key: string]: {}
}

interface IResourceRecord {
  [key: string]: Resource
}

const resources: IResourceRecord = {
  transactions: {
    list: (params: {}) => {
      request.write(params)
      request.end()
    },
    get: (params: {}) => {
      
    }
  },
  payments: {
    get: (params: {}) => {
      
    }
  }
}

class Paystack {
  endPoint: string = 'api.paystack.co'
  key: string = ''
  resources: IResourceRecord = {} as unknown as IResourceRecord
  param: {} = {}
  Events: {} = {}
  initiate: () => any
  extend(arg0: {}): any {
    throw new Error('Method not implemented.')
  }

  // transactions: () => any

  constructor(key: string) {
    if(!(this instanceof  Paystack)) {
      return new Paystack(key)
    }

    this.endPoint = this.endPoint
    this.key = key
    this.resources = resources
    this.initiate()
  }
}

export default Paystack


Paystack.prototype.initiate = function(): any {
  // console.log(this.resources)
  for(const resource in this.resources) {
    // console.log({ resource: Paystack.prototype })
    // Paystack.prototype['resources']['transactions'].list = resource
  }
}


Paystack.prototype.extend =  function(res: any): any {
  // console.log({ res })
  const name = this
  // console.log({ name })
  return function() {
    const data = arguments[0] || {};
    return data
  }
}


// const baseProto = Paystack.prototype as Record<string,any>;

const test = new Paystack(process.env.SECRET_KEY as string)

