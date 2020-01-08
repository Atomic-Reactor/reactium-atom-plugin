'use babel';

import Provider from './provider';
import Linear from '../data/linear';
import Feather from '../data/feather';

export default {
    getProvider() {
        const FeatherProvider = new Provider(Feather);
        const LinearProvider = new Provider(Linear);

        return [FeatherProvider, LinearProvider];
    }
};
