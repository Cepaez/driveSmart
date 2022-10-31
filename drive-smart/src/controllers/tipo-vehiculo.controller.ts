import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TipoVehiculo} from '../models';
import {TipoVehiculoRepository} from '../repositories';

export class TipoVehiculoController {
  constructor(
    @repository(TipoVehiculoRepository)
    public tipoVehiculoRepository : TipoVehiculoRepository,
  ) {}

  @post('/tipo-vehiculos')
  @response(200, {
    description: 'TipoVehiculo model instance',
    content: {'application/json': {schema: getModelSchemaRef(TipoVehiculo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoVehiculo, {
            title: 'NewTipoVehiculo',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoVehiculo: Omit<TipoVehiculo, 'id'>,
  ): Promise<TipoVehiculo> {
    return this.tipoVehiculoRepository.create(tipoVehiculo);
  }

  @get('/tipo-vehiculos/count')
  @response(200, {
    description: 'TipoVehiculo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TipoVehiculo) where?: Where<TipoVehiculo>,
  ): Promise<Count> {
    return this.tipoVehiculoRepository.count(where);
  }

  @get('/tipo-vehiculos')
  @response(200, {
    description: 'Array of TipoVehiculo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TipoVehiculo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TipoVehiculo) filter?: Filter<TipoVehiculo>,
  ): Promise<TipoVehiculo[]> {
    return this.tipoVehiculoRepository.find(filter);
  }

  @patch('/tipo-vehiculos')
  @response(200, {
    description: 'TipoVehiculo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoVehiculo, {partial: true}),
        },
      },
    })
    tipoVehiculo: TipoVehiculo,
    @param.where(TipoVehiculo) where?: Where<TipoVehiculo>,
  ): Promise<Count> {
    return this.tipoVehiculoRepository.updateAll(tipoVehiculo, where);
  }

  @get('/tipo-vehiculos/{id}')
  @response(200, {
    description: 'TipoVehiculo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TipoVehiculo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TipoVehiculo, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoVehiculo>
  ): Promise<TipoVehiculo> {
    return this.tipoVehiculoRepository.findById(id, filter);
  }

  @patch('/tipo-vehiculos/{id}')
  @response(204, {
    description: 'TipoVehiculo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoVehiculo, {partial: true}),
        },
      },
    })
    tipoVehiculo: TipoVehiculo,
  ): Promise<void> {
    await this.tipoVehiculoRepository.updateById(id, tipoVehiculo);
  }

  @put('/tipo-vehiculos/{id}')
  @response(204, {
    description: 'TipoVehiculo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoVehiculo: TipoVehiculo,
  ): Promise<void> {
    await this.tipoVehiculoRepository.replaceById(id, tipoVehiculo);
  }

  @del('/tipo-vehiculos/{id}')
  @response(204, {
    description: 'TipoVehiculo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoVehiculoRepository.deleteById(id);
  }
}
