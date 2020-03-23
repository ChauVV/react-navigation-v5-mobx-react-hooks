import { observable, action } from 'mobx'


class User {
  @observable name = 'John'
  @observable count = 0

  @action updateCount = (value) => {
    this.count = this.count + value
  }
}
const UserStore = new User()
export default UserStore
