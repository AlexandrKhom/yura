import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger: Logger = new Logger();
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { method, originalUrl } = context.switchToHttp().getRequest();
    const reqTime = Date.now();

    return next.handle().pipe(
      tap((response) => {
        const resTime = Date.now();
        const spendTime = resTime - reqTime;
        this.logger.verbose(
          `${method}, ${originalUrl}. time: ${spendTime}ms`,
          'LoggingInterceptor',
        );
      }),
    );
  }
}
