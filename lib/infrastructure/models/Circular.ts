import {Column, CreatedAt, Model, DataType, Table, UpdatedAt} from 'sequelize-typescript';

@Table
export class Circular extends Model<Circular> {

  @Column
  asunto!: String;

  @Column(DataType.TEXT)
  contenido!: String;

  @Column
  area!: String;

  @Column
  entidad!: String;

  @Column
  responsable!: String;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
