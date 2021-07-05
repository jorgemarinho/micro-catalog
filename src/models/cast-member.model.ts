import {Entity, model, property} from '@loopback/repository';

export enum CastMemberType {
  DIRECTOR = 1,
  ACTOR = 2
}

@model()
export class CastMember extends Entity {

  @property({
    id: true,
    generated: false,
    required: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 1,
      maxLength: 255
    }
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  @property({
    type: 'date',
    required: true
  })
  created_at: string;

  constructor(data?: Partial<CastMember>) {
    super(data);
  }
}

export interface CastMemberRelations {

}

export type CastMemberWithRelations = CastMember & CastMemberRelations;
