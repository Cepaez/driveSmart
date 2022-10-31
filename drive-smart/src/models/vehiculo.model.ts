import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Solicitud} from './solicitud.model';
import {TipoVehiculo} from './tipo-vehiculo.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'number',
    required: true,
  })
  tipooferta: number;

  @property({
    type: 'string',
    required: true,
  })
  foto: string;

  @property({
    type: 'string',
  })
  video?: string;

  @belongsTo(() => Asesor)
  asesorId: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @belongsTo(() => TipoVehiculo)
  tipoVehiculoId: string;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
