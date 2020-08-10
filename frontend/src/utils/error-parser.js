import _ from "lodash";

export default {
  parse(error) {
    if (error.response) {
      const { status } = error.response;
      const { data } = error.response;
      if (status === 400) {
        if (data && data.message) {
          return new Error(data.message);
        }
        return new Error("Bad request");
      }
      if (status === 401) {
        return new Error("Request not authorized.");
      }
      if (status === 403) {
        return new Error("Request forbidden.");
      }
      if (status === 404) {
        return new Error(
          "Request failed. Request endpoint not found on the server."
        );
      }
      if (status === 500) {
        if (data && data.message) {
          return new Error(`${data.message} Please try again later.`);
        }
        return new Error(
          "There is an error on the server side. Please try again later."
        );
      }
      return new Error("Request failed. Please try again later.");
    }
    if (error.request) {
      // Request was made and no response
      return new Error("Request failed. No response from the server.");
    }
    return _.isError(error) ? error : new Error(error);
  }
};
