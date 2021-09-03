export class GithubUser {
    avatarUrl: string
    name: string
    location: string

    /**
     *
     */
    constructor(avatarUrl:string, name:string, location:string) {
        this.avatarUrl=avatarUrl
        this.name=name
        this.location=location
    }
}
