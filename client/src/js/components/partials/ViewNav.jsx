var Link = require('react-router').Link;
var ViewNav = React.createClass({
  render: function() {
    return (
      <nav>
        <ul className="view-nav">
          <li><Link to="about">About</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = ViewNav;
