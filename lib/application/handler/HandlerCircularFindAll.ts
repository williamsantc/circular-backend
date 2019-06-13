import { PortRepositoryCircular } from '../../domain/port/PortRepositoryCircular';
import { CircularDomain } from '../../domain/models/CircularDomain';
import { AdapterRepositoryCircular } from '../../infrastructure/adapter/AdapterRepositoryCircular';

export class HandlerCircularFindAll {

  private static INSTANCE : HandlerCircularFindAll = new HandlerCircularFindAll();

  public static getInstance() {
    return this.INSTANCE;
  }

  private portRepositoryCircular: PortRepositoryCircular = AdapterRepositoryCircular.getInstance();

  public HandlerFindAll(portRepositoryCircular: PortRepositoryCircular) {
    this.portRepositoryCircular = portRepositoryCircular;
  }

  public async handle(): Promise<CircularDomain[]> {
    return this.portRepositoryCircular.findAll();
  }
}