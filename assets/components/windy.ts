// Description of the Component
/*
#DCECOMP
{
    "class": "Windy",
    "component": "EntityMover",
    "category": "Custom/Movers",
    "properties" : [
        [
        "name" : "distance"
        "type" : "number"
        ]
    ]
}
*/

@Component("EntityMover")
export class Windy {
    // the properties of your component
     public distance: number = 2;
    // public dimensions: Vector3 = new Vector3(2, 4, 2);
    // public label: string = "My Elevator";

    // optional init funcion, that is called, after the properties are set
    init(entity: Entity) {

        // entity.addComponent(new Animator())
        // // your init code here

        // // Instance and add a clip
        // entity.getComponent(Animator).addClip(new AnimationState("wind"))

        // entity.getComponent(Animator).getClip("wind")

        // const clipWind = new AnimationState("wind")

        // entity.getComponent(Animator).play(clipWind, true)

        

// Create the pivot entity
const pivot = new Entity()
// Position the pivot entity on the pivot point of the rotation
pivot.addComponent(
  new Transform({
    position: new Vector3(3, 2, 3),
  }).rotate(Vector3.Left(), this.distance).rotate(Vector3.Right(), -(this.distance))
)
// add pivot entity
engine.addEntity(pivot)
// Set pivot as the parent
entity.setParent(pivot)
// Position child in reference to parent
entity.addComponent(
   new Transform({
     position: new Vector3(0, 0.5, 0.5),
   })
 )
// // Define a system that updates the rotation on every frame

// // Add the system
// engine.addSystem(new PivotRotate())

// entity.addComponent(new PivotRotate())

    }
    
}

// export class PivotRotate implements ISystem {
//     update() {
//       let transform = pivot.getComponent(Transform)
//       transform.rotate(Vector3.Left(), 2)
//       transform.rotate(Vector3.Right(), -2)
//     }
//   }