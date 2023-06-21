export default {
  fetch() {
    const destinationURL = "https://twitter.com/cloudflare";
    const statusCode = 308;

    return Response.redirect(destinationURL, statusCode);
  },
};
