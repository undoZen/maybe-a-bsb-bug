// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


function getKey(ruleType) {
  if (!ruleType) {
    return "request.headers[x-forwarded-for]";
  }
  throw {
        RE_EXN_ID: "Match_failure",
        _1: [
          "Denylist.res",
          3,
          2
        ],
        Error: new Error()
      };
}

console.log("request.headers[x-forwarded-for]");

console.log(getKey(/* Url */1));

export {
  getKey ,
  
}
/*  Not a pure module */
