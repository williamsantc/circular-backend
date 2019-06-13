import { CircularDomain } from '../../domain/models/CircularDomain';
import { Circular } from '../models/Circular';
import { CircularMapperImpl } from '../mapper/CircularMapperImpl';
import { PortRepositoryCircular } from '../../domain/port/PortRepositoryCircular';

export class AdapterRepositoryCircular implements PortRepositoryCircular {

  private static INSTANCE = new AdapterRepositoryCircular();

  public static getInstance(): AdapterRepositoryCircular {
    return this.INSTANCE;
  }

  private circularMapper: CircularMapperImpl = CircularMapperImpl.getInstance();

  async findAll(): Promise<CircularDomain[]> {
    return this.circularMapper.mapListToDomain(await Circular.findAll());
  }

  async create(circularDomain: CircularDomain): Promise<CircularDomain> {
    return this.circularMapper.mapToDomain(await Circular.create(this.circularMapper.mapFromDomain(circularDomain)));
  }


}