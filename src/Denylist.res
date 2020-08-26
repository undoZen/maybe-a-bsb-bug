type ruleType = Ip | Url
let getKey = ruleType =>
  switch ruleType {
  | Ip => "request.headers[x-forwarded-for]"
  }

getKey(Ip)->Js.log
getKey(Url)->Js.log
