import React, {Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { connect} from 'react-redux';
import { getUserProfile } from '../redux/action-creators';
import githubLog from '../assets/github-logo.svg';
import NavigationBar from './navigationBar';

class UserDetails extends Component {
  state = {}

  componentDidMount() {
    const { getUserProfile, match: {
      params: { name},
    } } = this.props;
    getUserProfile(name);
  }

  render() { 
    const { profile, profiles: {error}} = this.props;
    const override = css`${{
      display: "block;",
      margin: "4em auto;",
      }}`; 
    if(profile === undefined && error === undefined) {
      return <ClipLoader
      css={override}
      sizeUnit={"px"}
      size={80}
      color={'#123abc'}
      loading={this.state.loading}
    />
    }
    if (error === "Request failed with status code 404") {
      return <div className="page-not-found">
      404 page not found
      </div>
    }
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
        <section className="single-selected-user-card">
            <div className="welcome-card">
            <img className="Welcome-image" src={profile.avatar_url} alt=""/>
            <p className="welcome-text">Welcome to <span>{profile.name}'s</span>  repositories section</p>
              <Link  className="view-repos" to={`/${profile.login}/repos`}>
                 <button className="btn btn-success view-repositories">View Repositories</button>
              </Link>
          </div>
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
  {getUserProfile}
)(UserDetails);