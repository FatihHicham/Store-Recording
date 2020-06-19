import React from "react";
import HealthyFood from "./HealthyFood";
import ProductCosmitic from "./ProductCosmitic";
import { Tabs, Tab } from "react-mdl";

class ArrivalsTopsold extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <HealthyFood />
        </div>
      );
    } else {
      return (
        <div>
          <ProductCosmitic />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>New Arrivals</Tab>
          <Tab>Top Sold</Tab>
        </Tabs>
        <section>
          <div className="project-grid">{this.toggleCategories()}</div>
        </section>
      </div>
    );
  }
}
export default ArrivalsTopsold;
