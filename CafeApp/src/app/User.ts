export class User
{
    id: number = 0;
    private _firstName: String = "";
    private _lastName: String = "";
    private password: String = "";

    constructor()
    {

    }    

    public get firstName() : String {
        return this._firstName;
    }
    
    public set firstName(v : String) {
        this._firstName = v;
    }
    
    
    public get lastName(): String
    {
        return this._lastName;
    }

    public set lastName(inStr: String)
    {
        this._lastName = inStr;
    }
    public checkPassword(pass: String): boolean
    {
        if(this.password === "TeknoPass")
        {
            return true
        }
        else
        {
            return false;
        }
    }





}