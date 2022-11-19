const route = '/apple-pay'

const apple_pay = {
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
export default apple_pay
