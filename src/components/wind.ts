// export const WindEffect = engine.defineComponent(
// 	"windEffect",
// 	{
// 		spinning: Schemas.Boolean,
// 		speed: Schemas.Float
// 	})


// // Usage
// export function main(){
// 	// Create entities
// 	//const wheel = engine.addEntity()
// 	const wheel2 = new Entity()
//     engine.addEntity(wheel2)

// 	// Create instances of the component

// 	WindEffect.create(wheedesopl2, {
// 		spinning: true,
// 		speed: 0	
// 	})
// }

// // Define a system to iterate over these entities
// export function spinSystem(dt: number) {
// 	// iterate over all entiities with a WheelSpinComponent
//   for (const [entity, wheelSpin] of engine.getEntitiesWith(WindEffect)) {

// 		// only do something if spinning == true
// 		if(wheelSpin.spinning){

// 			// fetch a mutable Transform component 
// 			const transform = Transform.getMutable(entity)

// 			// update the rotation value accordingly
// 			transform.rotation = Quaternion.multiply(transform.rotation, Quaternion.fromAngleAxis(dt * wheelSpin.speed, Vector3.Left(), Vector3.Right()))
// 		}
//   }
// }

// // Add system to engine
// engine.addSystem(spinSystem)