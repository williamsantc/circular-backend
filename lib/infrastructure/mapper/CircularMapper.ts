import { Circular } from "../models/Circular";
import { CircularDomain } from "../../domain/models/CircularDomain";
export interface CircularMapper {

  mapToDomain(circular: Circular): CircularDomain;

  mapFromDomain(circularDomain: CircularDomain): Circular;

  mapListToDomain(listaCircular: Circular[]): Promise<CircularDomain[]>;

}