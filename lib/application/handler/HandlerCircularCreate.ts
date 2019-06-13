import { FactoryCircular } from "../factory/FactoryCircular";
import { CircularDto } from "../dto/CircularDto";
import { CircularDomain } from "../../domain/models/CircularDomain";
import { ServiceCreateCircular } from "../../domain/service/ServiceCreateCircular";

export class HandlerCircularCreate {

  private static INSTANCE: HandlerCircularCreate = new HandlerCircularCreate();

  public static getInstance(): HandlerCircularCreate {
    return this.INSTANCE;
  }

  private serviceCreateCircular: ServiceCreateCircular = ServiceCreateCircular.getInstance();
  private factoryCircular: FactoryCircular = FactoryCircular.getInstance();

  public async exec(circularDto: CircularDto): Promise<String> {
    const circular: CircularDomain = this.factoryCircular.create(circularDto);
    const message: String = await this.serviceCreateCircular.exec(circular);
    return message;
  }
}