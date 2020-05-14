import {User} from "../domain/User"
import {UserRepository} from "./UserRepository"

export class MemoryUserRepository implements UserRepository {
	userMap: Map<string,User> = new Map();
	
	public save(user:User):User {
		this.userMap.set(user.username, user);
		return user;
	}
	
	public findByUsername(username:string ): User {
		return this.userMap.get(username);
	}


}
