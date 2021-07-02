import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('HIYA')
  fly(): void {
    console.log('vrrrr');
  }
}
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log('secret:', secret);
  }
}
