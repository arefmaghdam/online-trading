import config from "../../config";
import axios from "axios";

const postAPI = (apiUrl, data) => {
  const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("currentToken")}`,
    },
  };

  let promise = new Promise(function (myResolve, myReject) {
    axios
      .post(apiUrl, data, options)
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.errorMessage);
        } else {
          myResolve(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = `${config.OT_URL}bff/login`;
        else alert("Undefined exception: " + JSON.stringify(err));

        myReject(err);
      });

    // when successful
    // when error
  });

  return promise;
};
export default postAPI;
