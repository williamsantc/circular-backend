import { CircularMapper } from './CircularMapper';
import { CircularDomain } from '../../domain/models/CircularDomain';
import { Circular } from '../models/Circular';


export class CircularMapperImpl implements CircularMapper {

  private static INSTANCE = new CircularMapperImpl();

  public static getInstance(): CircularMapperImpl {
    return this.INSTANCE;
  }

  mapFromDomain(circularDomain: CircularDomain): Circular {
    const circular = new Circular();
    circular.area = circularDomain.$area;
    circular.asunto = circularDomain.$asunto;
    circular.contenido = circularDomain.$contenido;
    circular.entidad = circularDomain.$entidad;
    circular.responsable = circularDomain.$responsable;
    return circular;
  }

  mapToDomain(circular: Circular): CircularDomain {
    return new CircularDomain(circular.asunto, circular.asunto, circular.area, circular.entidad, circular.responsable);
  }

  mapListToDomain(listaCircular: Circular[]): Promise<CircularDomain[]> {
    const listaDomain: CircularDomain[] = new Array();
    listaCircular.forEach(circular => {
      listaDomain.push(new CircularDomain(circular.asunto, circular.asunto, circular.area, circular.entidad, circular.responsable))
    })

    return Promise.resolve(listaDomain);
  }
}