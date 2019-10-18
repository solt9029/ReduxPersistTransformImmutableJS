import Immutable from 'immutable';
import Serialize, { Refs } from 'remotedev-serialize';
import ReduxPersist from 'redux-persist';

interface TransformConfig {
  whitelist?: Array<string>;
  blacklist?: Array<string>;
}

export default function(records: Array<Refs>, config: TransformConfig) {
  const { stringify, parse } = Serialize.immutable(Immutable, records);
  return ReduxPersist.createTransform(stringify, parse, config);
}
