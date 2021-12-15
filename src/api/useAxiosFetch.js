const axiosFetch = async (axiosInstance, axiosParams, responseBuilder) => {
  console.log("in axiosFetch");
  try {
    const dataResult = await axiosInstance
      .request(axiosParams, responseBuilder)
      .then((res) => {
        if (typeof responseBuilder !== "undefined") {
          return responseBuilder(res.data);
        } else {
          return res.data;
        }
      })
      .catch((err) => {
        throw new Error(err.message);
      });

    return dataResult;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error", error.message);
    }
    console.log(error);
  }
};

export default axiosFetch;
