import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    this.store.push({
      data: {
        type: 'person',
        id: 1,
        attributes: {
          personStatus: 5
        }
      }
    });

    let person = this.store.peekRecord('person', 1);

    return person;
  }
}
