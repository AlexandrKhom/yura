import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class ErrorFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost): any;
}
