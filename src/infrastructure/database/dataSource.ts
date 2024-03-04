import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydatabase"
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data source has been initilized!")
    })
    .catch(error => console.error(error));