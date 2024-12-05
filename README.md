# Express.js Server Crash on Malformed JSON POST Request

This repository demonstrates a common error in Express.js applications: server crashes when receiving invalid JSON data in POST requests. The bug is caused by the lack of error handling when accessing `req.body`.  The solution implements robust error handling to gracefully handle invalid JSON and other potential issues.

## Bug

The `bug.js` file contains the problematic code. It uses `express.json()` middleware but lacks error handling for cases where `req.body` might be undefined or contain invalid JSON.

## Solution

The `bugSolution.js` file provides the corrected code. It includes error handling to check if `req.body` is properly parsed and handles potential parsing errors appropriately.  This prevents the server from crashing and provides a more robust response to invalid input.