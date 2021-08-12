export {ProductosI,ListaProductosI}

interface Entity{
  color:string;
  dimension:string;
  capacidad:string;
  modelo:string;
  material:string;
  calidad:string;
  cantidad:number;
}
interface ProductosI extends Entity{

}

interface ListaProductosI extends Entity {
  id:number;
}
