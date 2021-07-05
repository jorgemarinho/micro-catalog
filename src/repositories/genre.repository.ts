import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Esv7DataSource} from '../datasources';
import {Genre} from '../models';

export class GenreRepository extends DefaultCrudRepository<
  Genre,
  typeof Genre.prototype.id
> {
  constructor(
    @inject('datasources.esv7') dataSource: Esv7DataSource,
  ) {
    super(Genre, dataSource);
  }
}
