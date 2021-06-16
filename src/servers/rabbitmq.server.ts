import {Context} from '@loopback/context';
import {Server} from '@loopback/core';

export class RabbitmqServer extends Context implements Server {

  readonly listening: boolean;

  start(): Promise<void> | void {
    return undefined;
  }

  stop(): Promise<void> | void {
    return undefined;
  }
}
