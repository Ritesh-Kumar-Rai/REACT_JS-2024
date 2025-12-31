//  method to simulate the Contact Form Submission via API

// custom error
class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError";
  }
}

const sleep = async (timeInMilli = 300) => {
  return new Promise((resolve, reject) => {
    if (typeof timeInMilli !== "number") {
      reject(new TypeError("passed `param` must be `numeric` type!"));
    }
    setTimeout(() => {
      resolve(true);
    }, timeInMilli);
  });
};

const Fetch = (url, obj = { method: "post", body: "" }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await sleep(2000);
      if (
        typeof url !== "string" ||
        Object.prototype.toString.call(obj) !== "[object Object]"
      ) {
        return reject(new FetchError("Invalid passed Argument!"));
      }
      if (url !== "https://ritesh.kumar.rai/api/v1/submit-contact-form") {
        return reject(new FetchError("Failed To fetch: invalid url!"));
      }
      if (!obj.method || obj.method.toLowerCase() !== "post") {
        return reject(
          new FetchError("Failed To fetch: invalid options/method!")
        );
      }

      if (Object.prototype.toString.call(obj.body) !== "[object String]") {
        return reject(new FetchError("JSON data is not stringified!"));
      }
      await sleep(10000);
      const finalOutput = {
        success: true,
        msg: "form data submitted successfully!",
        response: "ok",
        data: JSON.parse(obj.body),
      };
      resolve(JSON.stringify(finalOutput));
    } catch (error) {
      reject(new FetchError(error.message));
    }
  });
};

export { Fetch };

/* [FOR TESTING ONLY..]
(async () => {
  try {
    const obj = {
      name: "Ritesh Kumar Rai",
      email: "developer@friendly.api.developer",
      message: "Namaste! I am looking for a job.🥳",
    };
    const res = await Fetch(
      "https://ritesh.kumar.rai/api/v1/submit-contact-form",
      {
        method: "POST",
        body: JSON.stringify(obj),
      }
    );
    console.log(JSON.parse(res));
  } catch (error) {
    console.log(error);
  }
})();*/

/* OR using .then().catch()
const obj = {
  name: "Ritesh Kumar Rai",
  email: "developer@friendly.api.developer",
  message: "Namaste! I am looking for a job.🥳",
};

Fetch("https://ritesh.kumar.rai/api/v1/submit-contact-form", {
  method: "POST",
  body: JSON.stringify(obj),
})
  .then((response) => {
    console.log(JSON.parse(response));
  })
  .catch((e) => {
    console.error("Error Captured:");
    console.error(e);
  });

*/
