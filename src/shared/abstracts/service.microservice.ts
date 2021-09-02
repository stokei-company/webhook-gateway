import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

interface DataMicroservice {
  readonly client: ClientProxy;
  readonly prefixPatternName: string;
  readonly defaultTimeout?: number;
}

export abstract class ServiceMicroservice {
  public readonly client: ClientProxy;
  public readonly prefixPatternName: string;
  public readonly defaultTimeout?: number = 5000;
  constructor(data: DataMicroservice) {
    Object.assign(this, data);
  }

  createPatternName = (action: string): string =>
    `${this.prefixPatternName}:${action}`;

  send<TResponse = any, TData = any>(
    pattern: any,
    data: TData
  ): Promise<TResponse> {
    return this.client
      .send<TResponse, TData>(pattern, data)
      .pipe(timeout(this.defaultTimeout))
      .toPromise();
  }

  emit<TResponse = any, TData = any>(
    pattern: any,
    data: TData
  ): Promise<TResponse> {
    return this.client
      .emit<TResponse, TData>(pattern, data)
      .pipe(timeout(this.defaultTimeout))
      .toPromise();
  }
}
