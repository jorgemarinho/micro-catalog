import {Options} from 'amqplib';
import {MethodDecoratorFactory} from '@loopback/metadata';

export interface RabbitmqSubscribeMetadata {
  exchange: string;
  routingKey: string | string[];
  queue?: string;
  queueOptions?: Options.AssertExchange;
}

export const RABBITMQ_SUBSCRIBE_DECORATOR = 'rabbitmq-subscribe-metada';

export function rabbitmqSubscribe(spec: RabbitmqSubscribeMetadata): MethodDecorator {
  return MethodDecoratorFactory.createDecorator<RabbitmqSubscribeMetadata>(
    RABBITMQ_SUBSCRIBE_DECORATOR, spec
  )
}
