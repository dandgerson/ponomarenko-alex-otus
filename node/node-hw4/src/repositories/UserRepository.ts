import { User } from 'src/models/User';
import { AsyncRepository } from '../lib/AsyncRepository';

let _userRepository: AsyncRepository<User> | null = null;
export async function getUserRepository() {
    if (_userRepository === null) {
        _userRepository = new AsyncRepository<User>();
        let id = await _userRepository.getNewId();
        await _userRepository.add({
            id,
            name: 'Anton'
        });
        id = await _userRepository.getNewId();
        await _userRepository.add({
            id,
            name: 'Ivan'
        });
    }

    return Promise.resolve(_userRepository);
}