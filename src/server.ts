import Fastify from "fastify";
import "reflect-metadata";

const fastify = Fastify({
    logger: true
});

const user = {
    username: "John",
    email: "johndoe@gmail.com",
    created_at: new Date()
}

fastify.get("/", (request, reply) => {
    reply.send(JSON.stringify(user));
});

fastify.listen({ port: 8080 }, (err, address) => {
    if(err)
    {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server is running at ${address}`);
});
