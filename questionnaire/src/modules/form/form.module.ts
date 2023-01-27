import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormSchema } from './entities/form.entity';
import { FormRepository } from './form.repository';
import { FormPresenter } from './form.presenter';
import { FormMapper } from './form.mapper';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'FormModel',
        schema: FormSchema,
      },
    ]),
  ],
  controllers: [FormController],
  providers: [FormService, FormRepository, FormPresenter, FormMapper],
})
export class FormModule {}
