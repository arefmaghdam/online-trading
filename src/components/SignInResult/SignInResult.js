import queryString from "query-string";

const SignInResult = () => {
  debugger;
  const parsed = queryString.parse(window.location.search);
  localStorage.setItem("currentToken", parsed.access_token);
  console.log(parsed.access_token);
  window.location.href = "/";
};

export default SignInResult;