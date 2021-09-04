export class GithubUser {
  avatarUrl: string;
  name: string;
  location: string;
  bio: string;
  url: string;
  gameDescription: string;

  constructor(avatarUrl: string,
              name: string,
              location: string,
              bio: string,
              url: string,
              gameDescription: string) {
    this.avatarUrl = avatarUrl;
    this.name = name;
    this.location = location;
    this.bio = bio;
    this.url = url;
    this.gameDescription = gameDescription;
  }

}
