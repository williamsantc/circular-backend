export class CircularDomain {

     private asunto: String;
     private contenido: String;
     private area: String;
     private entidad: String;
     private responsable: String;


     constructor($asunto: String, $contenido: String, $area: String, $entidad: String, $responsable: String) {
          // validations here
          this.asunto = $asunto;
          this.contenido = $contenido;
          this.area = $area;
          this.entidad = $entidad;
          this.responsable = $responsable;
     }


     /**
      * Getter $asunto
      * @return {String}
      */
     public get $asunto(): String {
          return this.asunto;
     }

     /**
      * Getter $contenido
      * @return {String}
      */
     public get $contenido(): String {
          return this.contenido;
     }

     /**
      * Getter $area
      * @return {String}
      */
     public get $area(): String {
          return this.area;
     }

     /**
      * Getter $entidad
      * @return {String}
      */
     public get $entidad(): String {
          return this.entidad;
     }

     /**
      * Getter $responsable
      * @return {String}
      */
     public get $responsable(): String {
          return this.responsable;
     }

     /**
      * Setter $asunto
      * @param {String} value
      */
     public set $asunto(value: String) {
          this.asunto = value;
     }

     /**
      * Setter $contenido
      * @param {String} value
      */
     public set $contenido(value: String) {
          this.contenido = value;
     }

     /**
      * Setter $area
      * @param {String} value
      */
     public set $area(value: String) {
          this.area = value;
     }

     /**
      * Setter $entidad
      * @param {String} value
      */
     public set $entidad(value: String) {
          this.entidad = value;
     }

     /**
      * Setter $responsable
      * @param {String} value
      */
     public set $responsable(value: String) {
          this.responsable = value;
     }


}