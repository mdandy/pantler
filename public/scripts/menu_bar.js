var MenuBar = React.createClass({

  cssClass: "pantler-menu-bar",

  getMenuItems: function() {
    return [{
      id: 0,
      label: "Pantry"
    }, {
      id: 1,
      label: "Food"
    }];
  },

  activateMenuItem: function(index) {
    this.setState({
      selectedIndex: index
    });
  },

  getInitialState: function() {
    return {
      menuItems: this.getMenuItems(),
      selectedIndex: 0,
    };
  },

  render: function() {
    var self = this;
    return (
      <div className={this.cssClass + " slds-tabs--default"}>
        <ul className="slds-tabs--default__nav">
          {
            this.state.menuItems.map(function(menuItem, index) {
              return (
                <li className={"slds-tabs--default__item slds-text-heading--label" + (index === self.state.selectedIndex ? " selected" : "")} key={menuItem.id}>
                  <a onClick={self.activateMenuItem.bind(self, index)} className="slds-tabs--default__link" href="javascript:void(0);">{menuItem.label}</a>
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