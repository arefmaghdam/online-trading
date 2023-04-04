const unsubscribeSocket = (url, data) => {
    let promise = postAPI(url , data).then(
      (resp) => {
        console.log("response: ", resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };
  
  export default unsubscribeSocket;