import Fastify from "fastify";

const app = Fastify({ logger: true });
app.get("/health", async () => ({ status: "ok" }));
app.listen({ port: 8080, host: "0.0.0.0" }).then(() => console.log("服务监听 0.0.0.0:8080"));
