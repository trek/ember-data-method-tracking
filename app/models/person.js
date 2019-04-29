import DS from 'ember-data';
const { Model, attr } = DS;

export default class PersonModel extends Model {
  @attr() personStatus;

  get isPersonStatusTwo() {
    return this.personStatus === 2;
  }
}
