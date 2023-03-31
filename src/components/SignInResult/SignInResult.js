import queryString from "query-string";

const SignInResult = () => {
  const parsed = queryString.parse(window.location.search);
  localStorage.setItem("currentToken", parsed.access_token);
  window.location.href = "/";
};

export default SignInResult;
