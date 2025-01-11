# Express.js - Insufficient Error Handling

This repository demonstrates a common error in Express.js applications: insufficient error handling. The provided code lacks detailed error handling, leading to generic error messages that are not informative for debugging or user experience.

## Bug Description
The server's error handling middleware catches errors, but it only sends a generic 'Something went wrong' message to the client. This makes identifying the root cause of errors more challenging for developers, and may mask sensitive information about server-side errors from attackers.