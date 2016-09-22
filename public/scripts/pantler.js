var Pantler = React.createClass({

  cssClass: "pantler",

  render: function() {
    return (
      <div>
        <img src="/img/logo.png" className={this.cssClass + " logo"} />
        <MenuBar/>
        <InventoryGrid/>
        <DockedComposer/>
      </div>
    );
  }
  
});

window.Pantler = Pantler;