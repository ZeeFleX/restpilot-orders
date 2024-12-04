import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        RabbitMQModule.forRootAsync(RabbitMQModule, {
            useFactory: (configService: ConfigService) => ({
                exchanges: [
                    {
                        name: 'orders-exchange',
                        type: 'direct',
                    },
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
            }),
            inject: [ConfigService]
        })
    ],
    exports: [RabbitMQModule]
})
export class RabbitmqModule {}
