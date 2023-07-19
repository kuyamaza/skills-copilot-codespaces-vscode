// Create a web server that can respond to requests for /comments.json with a JSON-encoded array of comments,
// much like your server did in the previous homework.
// However, it should serve up only the first 20 comments.
// Further requests to /comments.json should return the next 20 comments, e.g. comments 21–40.
// It’s okay to use a global variable to store all the comments.
// The comments should be in the same order as in the comments.json file,
// and the same comment should be returned for any given URL each time (assuming it hasn’t been deleted in the meantime).
// If a comment has been deleted, it should be shown as null in the JSON array.
// The server should respond to requests to delete individual comments by removing them from the global array.
// It should send back a JSON-encoded {status: "success"} object.

