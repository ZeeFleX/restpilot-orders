import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}

  test(data): any {
    return "Hello from orders-microservice";
  }

  async testWithOrders(data) {
    return await this.rabbitMQ.rpcSend('auth-exchange', 'auth.test2', data);
  }
}
