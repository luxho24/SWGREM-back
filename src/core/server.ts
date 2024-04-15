
import express, { Application } from 'express';
import db from '../database/connection';
import { User } from '../database/user/models/user';
import { UserRole } from '../database/user/models/userRole';
import userRoutes from '../routes/user.routes';

class Server {
    private app: Application;
    private port: String;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.dbConnect();
        this.listen();
        this.midlewares();
        this.routes();
    }

    async dbConnect() {
        try {
            db.createSchema("user", { logging: console.log })
                .then(() => {
                    console.log('Se ha creado el esquema "user" correctamente.');
                })
                .catch((error: any) => {
                    console.error("Error al crear el esquema:", error);
                });

            await UserRole.sync();
            await User.sync();
        } catch (error) {
            console.log('unable to connect to the database: ', error);
        }
    }
    routes() {
        this.app.use('/api/user', userRoutes);
    }

    midlewares(){
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("aplicacion corriendo en el puerto "+this.port)
        })
    }
}

export default Server;