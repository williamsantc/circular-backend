import {Sequelize} from 'sequelize-typescript';
import {Op} from 'sequelize';
import { Circular } from './infrastructure/models/Circular';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  operatorsAliases: Op,
  database: 'circular',
  storage: ':memory:'
});

sequelize.addModels([Circular]);

export {sequelize}