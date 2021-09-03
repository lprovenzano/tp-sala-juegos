export class GithubUser {
    avatarUrl: string
    name: string
    location: string
    gameDescription: string

    constructor(avatarUrl:string, name:string, location:string, gameDescription:string) {
        this.avatarUrl = avatarUrl
        this.name = name
        this.location = location
        this.gameDescription = gameDescription
    }
    
}
