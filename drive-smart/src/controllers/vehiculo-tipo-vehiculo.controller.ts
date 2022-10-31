import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vehiculo,
  TipoVehiculo,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoTipoVehiculoController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/tipo-vehiculo', {
    responses: {
      '200': {
        description: 'TipoVehiculo belonging to Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TipoVehiculo)},
          },
        },
      },
    },
  })
  async getTipoVehiculo(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
  ): Promise<TipoVehiculo> {
    return this.vehiculoRepository.tipoVehiculo(id);
  }
}
