import Fastify from 'fastify';
import container from './infrastructure/di/container.js';
import { userRoutes } from './interfaces/routes/userRoutes.js';

const app = Fastify({ logger: true });

await userRoutes(app, container);

const PORT = Number(process.env.PORT) || 3000;

app.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`🚀 Server running on ${address}`);
});
