const route = '/apple-pay'

const applePay = {
  RegisterDomain: {
    method: 'post',
    route: route + '/domain',
    BodyParam: {
      required: ['domainName'],
      optional: [],
    },
  },
  ListDomains: {
    method: 'get',
    route: route + '/domain',
    BodyParam: {
      required: [],
      optional: [],
    },
  },
  UnregisterDomain: {
    method: 'del',
    route: route + '/domain',
    BodyParam: {
      required: ['domainName'],
      optional: [],
    },
  },
}
export default applePay
