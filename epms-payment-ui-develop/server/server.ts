import express from 'express';
import {Router} from 'express';
import cors from 'cors';

export function startServer(port: number, router: Router) {
  const app = express();
  app.use(cors());
  app.use(express.json());       // to support JSON-encoded bodies
  app.use(express.urlencoded()); // to support URL-encoded bodies
  app.use('/', router);
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
    console.log(`process id ${process.pid}`);
  });
}

