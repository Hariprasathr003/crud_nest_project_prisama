"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_client_service_1 = require("./prisma-client/prisma-client.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_client_service_1.PrismaClientService);
    await app.listen(3000);
    prismaService.enableShutdownHooks(app);
}
bootstrap();
//# sourceMappingURL=main.js.map