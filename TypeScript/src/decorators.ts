
function measurePerformance(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    const duration = end - start;

    console.log(`Function '${propertyKey}' took ${duration} milliseconds to execute`);
    return result;
  };

  return descriptor;
}


function logArgumentsAndResult(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const argStr = args.map(arg => JSON.stringify(arg)).join(', ');
    console.log(`Calling '${propertyKey}' with arguments: ${argStr}`);

    const result = originalMethod.apply(this, args);
    console.log(`Function '${propertyKey}' returned: ${JSON.stringify(result)}`);

    return result;
  };

  return descriptor;
}
