import { DOMStrings } from "../utils/constants.js"
export const renderProfile = user => {
    DOMStrings.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <div class="d-grid gap-2">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4" type="button">View Profile</a>
        </div>
      </div>
      <div class="col-md-9">
        <span class="badge bg-primary mt-4">Public Repos: ${user.public_repos}</span>
        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge bg-success mt-4">Followers: ${user.followers}</span>
        <span class="badge bg-info">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
   `
}


export const renderRepo = repos => {
    let output = "";
    repos.forEach( repo => {
        output += `
              <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                   <a href ="${repo.html_url}" target="_blank"> ${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge bg-primary mt-4">Stars: ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge bg-success mt-4">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
              </diV>
            `
    } )

    document.getElementById( 'repos' ).innerHTML = output;


}