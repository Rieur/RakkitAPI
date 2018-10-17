import { Query, Resolver } from 'type-graphql'
import _MODEL_FILE_ from './_MODEL_FILE_'

@Resolver(_MODEL_FILE_)
export default class _CONTROLLER_ {
  @Query(returns => [_MODEL_FILE_])
  getAll_RP_NAME_() {
    return _MODEL_FILE_.find()
  }

  static async getAll(req, res) {
    res.send(await _MODEL_FILE_.find())
  }
}
