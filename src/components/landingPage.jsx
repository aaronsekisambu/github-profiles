import React, {Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';
import { connect} from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { getUsersProfiles } from '../redux/action-creators';
import githubLog from '../assets/github-logo.svg';


class LandingPage extends Component {
  state = {
    search: '',
    loading: true
  }

  componentDidMount() {
    const { getUsersProfiles } = this.props;
    getUsersProfiles();
  }

  search(e) {
    this.setState({search: e.target.value});
  }

  searchByUsername(profiles){
    const { search } = this.state;
    const searchData = profiles.filter(profile => profile.login.includes(search)).map( profile => (
      <div className="cards-container rounded-lg shadow-sm" key={profile.id}>
        <div className="single-card-body" >
          <div className="github-avatar">
            <img src={profile.avatar_url} alt=""/>
          </div>
          <div className="names">
            <h3 className="real-name">{profile.login}</h3>
            <h4 className="username">{profile.type}</h4>
          </div>
          <div className="more-details">
            <Link to={`/${profile.login}`} className="btn btn-outline-primary mb-4">More details</Link>
          </div>
        </div>
    </div>
      ))
      return searchData
  }

  render() { 
    const { profiles: {profiles} } = this.props;
    const override = css`${{
    display: "block;",
    margin: "4em auto;",
    }}`; 
    if(profiles === undefined) {
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
        <nav className="navbar navbar-light bg-light shadow-sm navigation">
          <div className="navbar-brand nav-logo"><img src={githubLog} alt=""/></div>
            <form className="form-inline">
              <input className="form-control mr-sm-2" onChange={e => this.search(e)} type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
        <section className="cards-section-area">
          {this.searchByUsername(profiles)}
        </section>
        </main>
      </Fragment>
     );
  }
}
 
const mapStateToProps = state => ({
  profiles: state.profiles
}
)
export default connect(
  mapStateToProps,
  {getUsersProfiles}
)(LandingPage);