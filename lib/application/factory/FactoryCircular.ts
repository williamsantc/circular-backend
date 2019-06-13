import { CircularDomain } from "../../domain/models/CircularDomain";
import { CircularDto } from "../dto/CircularDto";

export class FactoryCircular {
  private static INSTANCE: FactoryCircular = new FactoryCircular();

  public static getInstance() : FactoryCircular {
    return this.INSTANCE;
  }

  public create(circularDto: CircularDto): CircularDomain {
    return new CircularDomain(circularDto.$asunto, circularDto.$contenido,
      circularDto.$area, circularDto.$entidad, circularDto.$responsable);
  }
}