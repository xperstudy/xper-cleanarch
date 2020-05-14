import {UserRepository} from "./UserRepository";
import {User} from "./User";

export class MemoryUserRepository implements UserRepository {
    userMap: Map<string,User> = new Map<string, User>();

    construtor() {
        this.initUser();
    }

    initUser() {
        this.userMap.set("admin", new User("admin","admin1234"));
    }

    get(username: string): User|undefined {
        return this.userMap.get(username);
    }

    save(user: User) {
        this.userMap.set(user.username, user);
        console.log("helloskfjldskjf");
    }

}
