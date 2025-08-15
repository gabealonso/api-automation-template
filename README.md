# API Automation Template with Mocha & Chai

This repository is a template for API test automation, using Mocha and Chai. The tests are designed to run against the [Restful Booker API](https://restful-booker.herokuapp.com/apidoc/index.html#api-Auth).

## Description

This project enables API endpoint testing for the Restful Booker API, a test API that supports operations for creating, reading, updating, and deleting bookings. The test scripts are structured into suites, which can be executed individually according to their purpose, using `npm` commands.

## Install:
`npm install`

## .env file
create in root folder
```
HOST=""
USERNAME=""
PASSWORD=""

```

## Technologies

- **Mocha**: JavaScript test framework.
- **Chai**: Assertion library for validation.
- **Axios**: HTTP client used for API requests.

## Scripts
Test scripts can be executed with the command:

`npm run {suite_name}`

Note: Replace {suite_name} with the specific name of the suite defined in package.json.

## Usage
1. Make sure the Restful Booker API is available at https://restful-booker.herokuapp.com/.
2. Run the necessary tests as needed.
3. Check the results in the console.

## Contributions
Contributions are welcome. Please open an issue or pull request to make suggestions or improvements.

## License
This project is licensed under the MIT License.


This README provides a clear introduction for collaborators and users of the repository. Let me know if you'd like any adjustments!


Made with <3 by puchigabe
