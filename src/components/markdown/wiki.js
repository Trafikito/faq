import React from 'react';
import {Link} from 'gatsby';

const _get = require('lodash/get');
const wiki = {
  'dashboard': 'what-is-trafikito-s-dashboard',
  'workspace': 'what-is-a-workspace',
  'workspaces': 'what-is-a-workspace',
  'member': 'what-are-the-member-roles',
  'members': 'what-are-the-member-roles',
  'notifications': 'what-are-notifications',
  'notification': 'what-are-notifications',
  'api call': 'what-is-an-api-call',
  'api': 'what-is-an-api-call',
  'email template': 'what-is-email-templates',
  'email templates': 'what-is-email-templates',
  'variable': 'what-are-variables',
  'variables': 'what-are-variables',
  'data source': 'what-are-data-sources',
  'data sources': 'what-are-data-sources',
  'change password': 'how-to-change-my-password',
  'recover': 'https://trafikito.com/user/recover',
  'recover password': 'https://trafikito.com/user/recover',
};

export default class Wiki extends React.Component {
  render() {
    const text = _get(this.props, 'children.0', null);
    if (typeof text !== 'string') {
      console.error(`#ju4ohre child of wiki link must be a string`);
      return this.props.children;
    }
    if (text.trim() === '') {
      console.error(`#4324grer child of wiki link must be a some word not just an empty string`);
      return this.props.children;
    }

    const keyword = text.trim().toLowerCase();
    if (typeof wiki[keyword] === 'undefined') {
      console.error(`#4hrjejkehw unhandled wiki link keyword: ${JSON.stringify(this.props)}`);
      return this.props.children;
    }

    const href = wiki[keyword];

    if (href.indexOf('https://') === 0 || href.indexOf('http://') === 0) {
      // external link to new tab
      return (<a href={href} target={'_blank'}>{this.props.children}</a>);
    }

    // internal links
    return (
      <Link to={`/${href}.html`}>
        {this.props.children}
      </Link>
    );
  }
}
