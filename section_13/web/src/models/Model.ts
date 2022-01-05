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

  get on() {
    return this.events.on;
   }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

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