# ugmc

This project is a web application for managing patient information and encounters at the Uganda Medical Center (UGMC).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation
https://github.com/Owusu-Desmond/ugmc
1. Clone the repository: `git clone https://github.com/Owusu-Desmond/ugmc`
2. Navigate to the project directory: `cd ugmc`
3. Install the dependencies: `npm install`

## Configuration

1. Create a MongoDB database.
2. Update the MongoDB connection string in the `index.js` file:
    ```javascript
    mongoose.connect('mongodb://localhost:27017/ugmc', {useNewUrlParser: true, useUnifiedTopology: true});
    ```
    Replace `'mongodb://localhost:27017/ugmc'` with your MongoDB connection string.

## Usage

1. Start the server: `npm start`
2. Access the application in your web browser at `http://localhost:3000`

## API Endpoints

- `POST /patients`: Register a new patient
- `POST /encounters`: Start an encounter for a patient
- `POST /vitals`: Submit information on patient vitals
- `GET /patients`: View a list of patients
- `GET /patients/:patientId`: View the details of a specific patient

## Contributing

Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
