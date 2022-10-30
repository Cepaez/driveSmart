import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Invitacion, InvitacionRelations} from '../models';

export class InvitacionRepository extends DefaultCrudRepository<
  Invitacion,
  typeof Invitacion.prototype.id,
  InvitacionRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Invitacion, dataSource);
  }
}
