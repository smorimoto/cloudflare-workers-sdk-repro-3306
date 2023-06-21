export default {
  fetch() {
    const destinationURL = "https://example.com";
    const statusCode = 308;

    return Response.redirect(destinationURL, statusCode);
  },
};
