export class User
{
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    password: string = "";

    public User(_id: number, _firstName: string, _lastName: string, _password: string) : void{
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.password = _password;
    }

    public getUserId(): number
    {
        return this.id;
    }
    public getUserName(): string
    {
        return this.firstName;
    }
    public getUserLastName(): string
    {
        return this.lastName;
    }
    public checkPassword(pass: string): boolean
    {
        if(this.password === pass)
        {
            return true
        }
        else
        {
            return false;
        }
    }





}