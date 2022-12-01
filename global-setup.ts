module.exports = async () => {
  // this allows the tests to pass regardless of time zone
  process.env.TZ = "UTC";
};
