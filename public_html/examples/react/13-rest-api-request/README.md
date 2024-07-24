# REST API request example

A React project showing how to send a REST request to a backend API and how to
load data into React UI.

Note: in "real" projects you would store the data in either Redux store or
global context, here we simplify it to get a minimalistic example.

In the project directory, you can run:
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API URL

The base URL for the backend REST API is specified in an environment
variable `VITE_API_BASE_URL`. It is stored in the `.env` file, by default.
The `.env` file is consulted only at the build time. If you change the value,
restart the project.

## Backend

The backend is expected to server `/products` API, which returns a list of
product objects, each containing `id`, `name`, `price` and `description` fields.

An example backend project is available in
the [app-dev repo](https://github.com/strazdinsg/app-dev/tree/main/example-14-backend-for-react).
