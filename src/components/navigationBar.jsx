import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = ({logo, public_repos, public_gists, repoURL, homeURL, following, followers, name, avatar_url}) => {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm navigation">
          <Link to={homeURL}>
          <div className="navbar-brand nav-logo"><img src={logo} alt=""/></div>
          </Link>
              <div className="user-details-header">
              <ul>
                <li>
                    <div className="public-header-info">
                    <Link to={repoURL}>
                      <span className="public-title-name click-repo">Repositories</span>
                      <span className="public-title-count">{public_repos}</span>
                      </Link> 
                    </div> 
                </li>
                <li>
                    <div className="public-header-info">
                      <span className="public-title-name">Public Gists</span>
                      <span className="public-title-count">{public_gists}</span>
                    </div> 
                </li>
                <li>
                    <div className="public-header-info">
                      <span className="public-title-name">Following</span>
                      <span className="public-title-count">{following}</span>
                    </div> 
                </li>
                <li>
                    <div className="public-header-info">
                      <span className="public-title-name">Followers</span>
                      <span className="public-title-count">{followers}</span>
                    </div> 
                </li>
                <li>
                </li>
                <li>
                  <div className="user-avatar">
                   <h3 className="header-user-name">{name}</h3>
                    <img src={avatar_url} alt=""/>
                  </div>
                </li>
              </ul>

              </div>
        </nav>
  )
}


export default NavigationBar;