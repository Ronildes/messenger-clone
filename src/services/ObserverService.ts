function ObserverService() {
  const observers = [] as any;

  function subscribe(observerFunction: void) {
    observers.push(observerFunction);
  }

  function notifyAll(command: any) {
    for (const observerFunction of observers) {
      observerFunction(command);
    }
  }
}
export default ObserverService;
