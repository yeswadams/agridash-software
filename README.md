![Project Image](https://github.com/yeswadams/sendsms.apibyafricastalking/blob/main/httpsdev-to-uploads.s3.amazonaws.png)

# Sending SMS with Africa's Talking API
This project is a Node.js application that demonstrates how to send SMS messages using the Africa's Talking API. It also sets up a simple SMS server to handle incoming messages via a webhook.

## Features
- **Send SMS**: Uses Africa's Talking API to send SMS messages.
- **Receive SMS**: Sets up an endpoint to receive incoming SMS messages.
- **Modern JavaScript**: Utilizes ES6 features like arrow functions and async/await.

## Prerequisites
- Node.js (v12 or higher recommended)
- npm (comes with Node.js) or Yarn
- An Africa's Talking account with API credentials (sandbox or production)

## Usage

### Running the Application
The application consists of three main files:

- `sendSMS.js`: Contains the logic to send an SMS message.
- `smsServer.js`: Sets up an Express server to listen for incoming SMS messages.
- `index.js`: The entry point that calls both the SMS sending function and starts the SMS server.

To start the application, run:

```bash
node index.js
