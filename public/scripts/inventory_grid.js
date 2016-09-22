var InventoryGrid = React.createClass({

  cssClass: "pantler-inventory-grid",

  getMetadata: function() {
    return [{
      name: "name",
      label: "Name"
    }, {
      name: "quantity",
      label: "Qty."
    }, {
      name: "expiration",
      label: "Expiration"
    }];
  },

  getInventories: function() {
    return [{
      id: 0,
      name: "Granola Bar",
      quantity: 5,
      expiration: new Date().toString()
    }, {
      id: 1,
      name: "Ketchup",
      quantity: 1,
      expiration: new Date().toString()
    }];
  },

  getInitialState: function() {
    return {
      metadata: this.getMetadata(),
      inventories: this.getInventories()
    };
  },

  render: function() {
    var metadata = this.state.metadata;
    var inventories = this.state.inventories;
    var arrowDownSVG = '<use xlink:href="styles/slds/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>'
    
    return (
      <table className={this.cssClass + " slds-table slds-table--bordered slds-table--fixed-layout"}>
        <thead>
          <tr className="slds-text-heading--label">
            {
              metadata.map(function(metadatum) {
                return (
                  <th className="slds-is-sortable" scope="col" style={{width: "300px"}} key={metadatum.name}>
                    <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset">
                      <span className="slds-truncate" title={metadatum.label}>{metadatum.label}</span>
                      <div className="slds-icon_container">
                        <svg className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" dangerouslySetInnerHTML={{__html: arrowDownSVG}} />
                      </div>
                    </a>
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            inventories.map(function(inventory) {
              return (
                <tr className="slds-hint-parent" key={inventory.id}>
                  {
                    metadata.map(function(metadatum, index) {
                      return (
                        <td key={inventory.id + metadatum.name}>
                          <div className="slds-truncate" title={inventory[metadatum.name]}>{inventory[metadatum.name]}</div>
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
});

window.InventoryGrid = InventoryGrid;