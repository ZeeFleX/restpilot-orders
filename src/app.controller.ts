import { Controller } from '@nestjs/common';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @RabbitRPC({
    exchange: 'orders-exchange',
    routingKey: 'orders.testWithOrders',
    queue: 'orders.testWithOrders',
  })
  async testWithOrders(data: any) {
    return this.appService.testWithOrders(data);
  }
}
