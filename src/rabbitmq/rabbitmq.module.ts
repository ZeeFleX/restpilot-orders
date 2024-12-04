import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RabbitmqService } from "./rabbitmq.service";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        RabbitMQModule.forRoot(RabbitMQModule, {
            exchanges: [
                {
                    name: 'orders-exchange',
                    type: 'direct',
                    createExchangeIfNotExists: true
                }
            ],
            queues: [
                {
                    name: 'orders-queue',
                    createQueueIfNotExists: true,
                    exchange: 'orders-exchange'
                }
            ],
            uri: process.env.RABBITMQ_URI,
            enableControllerDiscovery: true
        })
    ],
    providers: [RabbitmqService],
    exports: [RabbitmqService]
})
export class RabbitmqModule {}
