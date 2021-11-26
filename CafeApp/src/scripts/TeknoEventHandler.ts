import { User } from "src/app/User";
import { UserService } from "src/app/user.service";

export class EHandler
{
    private userService!: UserService;
    
    public EHandler()
    {

    }

    public checkIfValidUser(usr: User) : boolean
    {
        if(this.userService.getUserByName(usr.getUserName()))
        {
            return true;
        }
        else 
        {
            return false;
        }
        
    }
}
