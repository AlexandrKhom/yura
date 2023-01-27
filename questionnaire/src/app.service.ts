import { Injectable } from '@nestjs/common';
// import chalk from 'chalk';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log(chalk.blue('Hello world !!!ALEX!!!'));
    return 'Hello World!';
  }
}
