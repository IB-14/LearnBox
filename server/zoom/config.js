const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "u7tOiM8KRR-fFGxAvTh2Rg",
    APISecret: "CZB0uyLxz5FK9pTmYDGLrQHe14ocdrFv1tnT",
  },
};

module.exports = config[env];
