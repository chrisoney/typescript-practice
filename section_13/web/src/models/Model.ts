import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];

  set(update: T): void;
  
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events,
  ) {};

  // longer syntax for passthrough methods. Could use previously.
  // get on() {
  //   return this.events.on;
  //  }
  // shorter syntax for passthrough methods. Could not use previously, as we need the modifier shortened syntax in the constructor so that those lines will run before the line below. Otherwise it would run before this.events or something similar was initialized
  on = this.events.on;

  // get trigger() {
  //   return this.events.trigger;
  // }

  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') throw new Error("Cannot fetch without an id");
    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
    .then((res: AxiosResponse): void => {
      this.trigger('save');
    })
    .catch((): void => {
      this.trigger('error');
    })
  }
}