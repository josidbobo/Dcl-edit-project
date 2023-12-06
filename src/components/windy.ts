// Description of the Component
/*
#DCECOMP
{
    "class": "Windy",
    "component": "EntityMover",
    "category": "Custom/Movers",
    "properties" : [
        {
        "name" : "distance",
        "type" : "number"
       }
    ] 
}
*/


@Component("EntityMover")
export class Windy {
    // the properties of your component
     public speed: number = 0.02
     private entity: Entity | undefined
    // optional init funcion, that is called, after the properties are set
    init(entity: Entity) {
    this.entity = entity;
    // entity.addComponent(new onPointerDown(() => {
    //   entity.getComponent(Transform).position.x += this.speed
    // })) 
    this.update()
      }
    
      update(){
       const rotationSpeed = this.speed;
       const rotationAngle = Math.sin(Date.now() * rotationSpeed);

       this.entity?.addComponent(new Transform({
        rotation: Quaternion.Euler(0, rotationAngle * 20, 0)
          }))   
        
          this.update()
        }      
    }


// export class PivotRotate implements ISystem {
//     update() {
//       let transform = pivot.getComponent(Transform)
//       transform.rotate(Vector3.Left(), 2)
//       transform.rotate(Vector3.Right(), -2)
//     }
//   }

 // // Define a system that updates the rotation on every frame
      // // Add the system
      // engine.addSystem(new PivotRotate())
      // entity.addComponent(new PivotRotate())

