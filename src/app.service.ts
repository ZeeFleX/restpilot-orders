import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}

  test(data): any {
    return data;
  }
}
