var MenuBar = React.createClass({

  cssClass: "pantler-menu-bar",

  _getMenuItems: function() {
    return [{
      id: 0,
      label: "Pantry"
    }, {
      id: 1,
      label: "Food"
    }];
  },

  getInitialState: function() {
    return {
      menuItems: this._getMenuItems()
    };
  },

  render: function() {
    return (
      <div className={this.cssClass + " slds-tabs--default"}>
        <ul className="slds-tabs--default__nav">
          {
            this.state.menuItems.map(function(menuItem) {
              return (
                <li className="slds-tabs--default__item slds-text-heading--label" key={menuItem.id}>
                  <a className="slds-tabs--default__link" href="javascript:void(0);">{menuItem.label}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  
});

window.MenuBar = MenuBar;