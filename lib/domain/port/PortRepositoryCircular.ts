import { CircularDomain } from "../models/CircularDomain";

export interface PortRepositoryCircular {

  findAll(): Promise<CircularDomain[]>;

  create(circularDomain: CircularDomain): Promise<CircularDomain>;

}