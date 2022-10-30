import {Entity, model, property} from '@loopback/repository';

@model()
export class Invitacion extends Entity {
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
  enlace: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;


  constructor(data?: Partial<Invitacion>) {
    super(data);
  }
}

export interface InvitacionRelations {
  // describe navigational properties here
}

export type InvitacionWithRelations = Invitacion & InvitacionRelations;
