import React, {Component, Fragment } from 'react';
import { connect} from 'react-redux';
import moment from 'moment';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import NavigationBar from './navigationBar';
import { getUserRepos, getUserProfile  } from '../redux/action-creators';
import githubLog from '../assets/github-logo.svg';

class Repositories extends Component {
  state = {}

  componentDidMount() {
    const { getUserRepos, getUserProfile, match: {
      params: { name},
    } } = this.props;
    getUserRepos(name);
    getUserProfile(name)
  }

  render() { 
    const { profiles: { repos }, profile } = this.props;
    const override = css`${{
      display: "block;",
      margin: "4em auto;",
      }}`; 
    if(repos === undefined || profile === undefined) {
      return <ClipLoader
      css={override}
      sizeUnit={"px"}
      size={80}
      color={'#123abc'}
      loading={this.state.loading}
    />
    };

    return ( 
      <Fragment>
        <main>
          <NavigationBar 
          logo={githubLog} 
          public_repos={profile.public_repos} 
          public_gists={profile.public_gists}
          following={profile.following} 
          followers={profile.followers}
          name={profile.name}
          avatar_url={profile.avatar_url}
          homeURL={'/'}
          repoURL={`/${profile.login}/repos`}
          />
        <section className="cards-section-area">
          {repos.map( repo => (
          <div className="repo-cards-container rounded-lg shadow-sm" key={repo.id}>
            <div className="single-card-body-repos" >
              <div className="repo-names">
                <h3 className="repo-description">{repo.name}</h3>
                <h4 className="description">{repo.description}</h4>
              </div>
              <div className="languages">
                <h3 className="used-repos">Languages</h3>
                <ul>
                  <li><i className="zmdi zmdi-time-interval"></i>{repo.language}</li>
                </ul>
              </div>
              <div className="details-section-area">
                <h3 className="default-branch">Default Branch</h3>
                <h3 className="branch-details">{repo.default_branch}</h3>
                <h4 className="branch-details">Size: {repo.size}</h4>
                <h4 className="branch-details">Open issues: {repo.open_issues}</h4>
                <h4 className="branch-details">Watchers: {repo.watchers_count}</h4>
                <h4 className="branch-details">Forks: {repo.forks_count}</h4>
              </div>
              <div className="cards-footer border-bottom-0 border-top  border-info">
                <ul>    
                  <li>
                    <div className="icon-section">
                      <div className="repo">
                        <span className="repositories">Created At</span>
                        <span className="total-time">{moment(repo.created_at).format("llll")}</span>
                      </div> 
                    </div>
                  </li>
                  <li>
                    <div className="icon-section">
                      <div className="repo">
                        <span className="repositories">Updated At</span>
                        <span className="total-time">{moment(repo.updated_at).format("llll")}</span>
                      </div> 
                    </div>
                  </li>
                  <li>
                    <div className="icon-section">
                      <div className="repo">
                        <span className="repositories">Pushed At</span>
                        <span className="total-time">{moment(repo.pushed_at).format("llll")}</span>
                      </div> 
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          ))}
        </section>
        </main>
      </Fragment>
     );
  }
}
 
const mapStateToProps = state => ({
  profiles: state.profiles,
  profile: state.profiles.profile
}
)
export default connect(
  mapStateToProps,
  {getUserRepos, getUserProfile}
)(Repositories);