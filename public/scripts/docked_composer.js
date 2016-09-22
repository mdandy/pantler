var DockedComposer = React.createClass({

  cssClass: "pantler-docked-composer",
  label: "Insert New Inventory",

  getMetadata: function() {
    return [{
      name: "name",
      label: "Name",
    }, {
      name: "quantity",
      label: "Qty."
    }, {
      name: "expiration",
      label: "Expiration"
    }];
  },

  getInventory: function() {
    return {
      name: "Gummy Bear",
      quantity: 20,
      expiration: new Date().toString()
    };
  },

  toggleComposer: function() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },

  handleChange: function(field, event) {
    var record = this.state.record;
    record[field] = event.target.value;
    this.setState(record);
  },

  submit: function() {
    console.log(this.state.record);
  },

  getInitialState: function() {
    return {
      isOpen: false,
      metadata: this.getMetadata(),
      record: this.getInventory()
    };
  },

  render: function() {
    var self = this;
    var metadata = this.state.metadata;
    var record = this.state.record;
    var addButtonSVG = '<use xlink:href="styles/slds/assets/icons/action-sprite/svg/symbols.svg#new"></use>';
    var closeButtonSVG = '<use xlink:href="styles/slds/assets/icons/utility-sprite/svg/symbols.svg#close"></use>';

    return (
      <div className={this.cssClass}>
        <button onClick={this.toggleComposer} className="composer-new-button slds-button slds-button--icon slds-button--icon-inverse">
          <span className="slds-icon_container slds-icon-action-new slds-icon_container--circle">
            <svg aria-hidden="true" className="slds-icon" dangerouslySetInnerHTML={{__html: addButtonSVG}} />
            <span className="slds-assistive-text">{this.label}</span>
          </span>
        </button>

        <div className={"composer-panel slds-utility-panel slds-grid slds-grid--vertical" + (this.state.isOpen ? " slds-is-open" : "")} role="dialog" aria-labelledby="panel-heading-01">
          <div className="slds-utility-panel__header slds-grid slds-shrink-none">
            <div className="slds-utility-panel__header-label">
              <div className="slds-media slds-media--center">
                <div className="slds-media__body">
                  <h2 id="panel-heading-01">{this.label}</h2>
                </div>
              </div>
            </div>
            <div className="slds-utility-panel__header-icon-action slds-col--bump-left">
              <button onClick={this.toggleComposer} className="slds-button slds-button--icon slds-button--icon-inverse">
                <svg aria-hidden="true" className="slds-button__icon" dangerouslySetInnerHTML={{__html: closeButtonSVG}} />
                <span className="slds-assistive-text">Close</span>
              </button>
            </div>
          </div>
          <div className="slds-docked-composer__body slds-docked-composer__body--form slds-col slds-grid slds-grid--vertical slds-nowrap">
            <fieldset className="slds-form--compound">
                <legend className="slds-assistive-text">{this.label}</legend>
                  <div className="form-element__group">

                  {
                    metadata.map(function(metadatum) {
                      return (
                        <div className="slds-form-element__row" key={metadatum.name}>
                          <div className="slds-form-element">
                            <label className="slds-form-element__label" htmlFor={metadatum.name}>{metadatum.label}</label>
                            <div className="slds-form-element__control">
                              <input className="slds-input" type="text" id={metadatum.name} value={record[metadatum.name]} onChange={self.handleChange.bind(self, metadatum.name)} />
                            </div>
                          </div>
                        </div>  
                      )
                    }) 
                  }

                </div>
              </fieldset>
          </div>

          <div className="slds-docked-composer__body slds-col slds-grid slds-grid--vertical slds-nowrap slds-size--1-of-1"></div>
          <footer className="slds-docked-composer__footer slds-shrink-none">
            <div className="slds-float--right slds-grid slds-grid--align-end slds-size--1-of-2 slds-text-align--right">
              <button onClick={this.submit} className="slds-button slds-button--brand">Save</button>
            </div>
          </footer>
        </div>
      </div>
    );
  }
});

window.DockedComposer = DockedComposer;