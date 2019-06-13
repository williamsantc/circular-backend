import { PortRepositoryCircular } from "../port/PortRepositoryCircular";
import { AdapterRepositoryCircular } from "../../infrastructure/adapter/AdapterRepositoryCircular";
import { CircularDomain } from "../models/CircularDomain";

export class ServiceCreateCircular {

  private portRepositoryCircular: PortRepositoryCircular = AdapterRepositoryCircular.getInstance();

  private MESSAGE_SUCCESS = "Circular registrada correctamente";

  private static INSTANCE :ServiceCreateCircular = new ServiceCreateCircular();

  public static getInstance() : ServiceCreateCircular {
    return this.INSTANCE;
  }

  public ServiceCreateCircular(portRepositoryCircular: PortRepositoryCircular) {
    this.portRepositoryCircular = portRepositoryCircular;
  }

  public async exec(circularDomain: CircularDomain): Promise<String> {
    // Business logic here
    await this.portRepositoryCircular.create(circularDomain);
    return this.MESSAGE_SUCCESS;
  }
}