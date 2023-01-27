import { SwaggerMethodDoc } from '../utils/swagger.types';
import { FormController } from '../modules/form/form.controller';
import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CreateFormReqDto } from '../modules/form/dto/request/create.form.req.dto';
import { WrapCreateFormRes } from '../modules/form/dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from '../modules/form/dto/responce/filter.form.res.dto';

export const docs: SwaggerMethodDoc<FormController> = {
  findAllForms(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
      }),
      ApiOkResponse({
        description: 'EXAMPLE get all Forms',
        type: WrapFilterFormRes,
      }),
    );
  },

  findOneForm(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
      }),
      ApiOkResponse({
        description: 'EXAMPLE findOneForm',
        type: WrapCreateFormRes,
      }),
    );
  },

  createForm(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
      }),
      ApiBody({ type: CreateFormReqDto }),
      ApiCreatedResponse({
        description: 'EXAMPLE create Form',
        type: WrapCreateFormRes,
      }),
    );
  },
};
