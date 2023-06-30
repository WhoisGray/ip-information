# 🌐 IP Information

A simple Node.js application that captures client request details and provides information about the client, including IP address, user agent, and geo location.

## 🚀 Quick Start

1. Clone the repository:

   ```shell
   git clone https://github.com/WhoisGray/ip-information.git
   ```

2. Install dependencies:
   ```shell
   npm install
   ```
3. Start the server:
   ```shell
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## 🐳 Docker

This project includes Docker and Docker Compose files, allowing you to easily containerize and run the application in a Docker environment. To use Docker, follow these steps:

1. Install Docker on your machine.
2. Build the Docker image:
   ```shell
   docker build -t ip-information .
   ```
3. Run the Docker container:
   ```shell
   docker run -p 3000:3000 ip-information
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## 📋 Features

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [geoip-lite](https://www.npmjs.com/package/geoip-lite) - Light-weight module to look up IP address information.

## Routes

The application defines the following routes:

- **Root Route ("/")**

  - This route handles GET requests to the root URL ("/").
  - It retrieves the client's public IP address and sends it as a response to the client.
  - The IP address is extracted from the request headers, specifically the "x-forwarded-for" header or the remote address.
  - The IP address is displayed as a response message, indicating the client's public IP address.

- **"/details" Route**
  - This route handles GET requests to the "/details" URL.
  - It retrieves additional information about the client, including IP address, user agent, and geo location.
  - The IP address is extracted from the request headers, similar to the root route.
  - The user agent information is obtained from the "user-agent" header in the request.
  - The geo location information is obtained using the "geoip-lite" package based on the client's IP address.
  - The response is a JSON object containing the client's IP address, user agent, and geo location details, along with other request information like URL, method, headers, and cookies.

You can access the root route ("/") to retrieve the client's public IP address and the "/details" route to obtain more comprehensive client information.

Feel free to modify or add more routes based on your application's requirements.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author:

- [GitHub](https://github.com/WhoisGray)

Now, the README.md file mentions the availability of Docker and Docker Compose files, and provides instructions on how to use them to containerize and run the application.

If you have any further questions or need additional assistance, feel free to ask!
