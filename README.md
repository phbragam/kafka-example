# CRUD application with Kafka logging server

## Explanation

 This project consists in an API with crud and login operations for users. Users can authenticate and then are enabled to post in `tb01` if they have the expected permission. The `tb01` post enpoint is configured with a Kafka producer. The producer comunicates with the Kafka broker in topic `tb01.post` and the consumer is a logging-server that prints the value of `col_texto` from `tb01` new records in the terminal. This consumer also has a producer configured, so, after the print operation, it produces a message to the `logs.summary` topic that can be consumed by other services.

## Setup

### 1. Install Dependencies
- Install Node.js and Kafka on your machine.

### 2. Clone the Repository
- Clone this repository to your local machine.

### 3. Configure Environment Variables

#### For the API
- Create a `.env` file in the `node/api` folder with the following configuration:


```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
APP_PORT=your_application_port
ACCESS_TOKEN_SECRET=your_access_token_secret
BROKER_KAFKA_HOST=your_kafka_broker_host
```

#### For the Logging Server
- Create a `.env` file in the `node/logging-server` folder with the following configuration:

```env
BROKER_KAFKA_HOST=your_kafka_broker_host
```

## 4. Install Node.js Dependencies
- Run `npm i` in both the `node/api` folder and the `node/logging-server` folder.

## 5. Start the Applications
- Run `node api/index.js` and `node logging-server/index.js`.

## 6. Create Kafka Topics
- Create the topics `tb01.post` and `logs.summary` in the Kafka broker.

## 7. Start Kafka and Zookeeper
- Run Zookeeper and the Kafka broker.

## API documentation

### User Model Definition

- **Table Name**: `user_data`
- **Description**: Stores information about the users of the system, including their roles and credentials.

- **Fields**:
  - **id**: 
    - **Type**: `INTEGER`
    - **Description**: Primary key, auto-incremented.
  - **username**: 
    - **Type**: `TEXT`
    - **Description**: The username for the user, required for login.
  - **password**: 
    - **Type**: `TEXT`
    - **Description**: The user's password, stored encrypted as text.
  - **role**: 
    - **Type**: `ENUM('admin', 'guest')`
    - **Description**: Defines the role of the user, either 'admin' or 'guest'. Defaults to 'guest'.
  - **col_dt**: 
    - **Type**: `DATE`
    - **Description**: The date and time when the user was created. Defaults to the current date and time.

### Tb01 Model Definition

- **Table Name**: `tb01_data`
- **Description**: Stores records with textual content.

- **Fields**:
  - **id**: 
    - **Type**: `INTEGER`
    - **Description**: Primary key, auto-incremented.
  - **col_texto**: 
    - **Type**: `TEXT`
    - **Description**: A text field containing the content to be stored, required.
  - **col_dt**: 
    - **Type**: `DATE`
    - **Description**: The date and time when the record was created. Defaults to the current date and time.

### User Enpoints

- **List All Users**
  - **Method**: `GET`
  - **URL**: `/user`
  - **Description**: Retrieves a list of all users.

- **Get User by ID**
  - **Method**: `GET`
  - **URL**: `/user/:id`
  - **Description**: Retrieves a user by their `id`.

- **Create New User**
  - **Method**: `POST`
  - **URL**: `/user`
  - **Description**: Creates a new user with the provided data.

- **Update User by ID**
  - **Method**: `PUT`
  - **URL**: `/user/:id`
  - **Description**: Updates the user with the specified `id`.

- **Delete User by ID**
  - **Method**: `DELETE`
  - **URL**: `/user/:id`
  - **Description**: Deletes the user with the specified `id`.

### Login Operation

For user authentication, you need to verify the user's `username` and `password`. The login operation checks if the provided credentials match any existing user in the database.

1. **Input**:
   - `username`: The username of the user attempting to log in.
   - `password`: The password provided by the user.

2. **Endpoint**:
   - **Method**: `POST`
   - **URL**: `/login`

3. **Verification**:
   - The system checks if there is a user with the given `username` and `password`.
   - If a matching user is found:
     - **Successful Login**: The system generates and returns an `accessToken`. This token includes the user's role and is used for authenticated requests.
   - If no matching user is found:
     - **Failed Login**: The system returns an error indicating that the login attempt was unsuccessful.


## Tb01 Endpoint

- **Create New record**
  - **Method**: `POST`
  - **URL**: `/tb01`
  - **Authentication**: Bearer token from login.
  - **Authorization**: Role should be 'admin'
  - **Description**: Inserts a new register.





 



