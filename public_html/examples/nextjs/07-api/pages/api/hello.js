/**
 * Handler for the /api/hello endpoint.
 * 
 * @param {http.IncomingMessage} req The HTTP request
 * @param {http.ServerResponse} res The HTTP response
 */
export default function handler(req, res) {
  res.status(200).json({"message": "Hei på deg", "success": true});
}
