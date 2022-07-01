import { createMedia } from "@artsy/fresnel";
import React, { Component } from "react";
import { Icon, Menu, Sidebar, Image, Container, Segment } from "semantic-ui-react";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
  const { children, leftItems, onPusherClick, onToggle, visible } = props;

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="left"
        icon="labeled"
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu
          fixed="top"
          borderless
          style={{ borderRadius: "0px", backgroundColor: "#305E74" }}
        >
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              className="navButton"
              style={{
                color: "#DBC8B6",
                paddingTop: "8px",
                paddingRight: "0",
                opacity: "100",
              }}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/madelinea/"
            >
              <Icon class="link" enabled name="linkedin" size="large" />
            </Menu.Item>
            <Menu.Item
              className="navButton"
              style={{ color: "#DBC8B6", paddingTop: "8px", opacity: "100" }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/madelines-code"
            >
              <Icon class="link" enabled name="github" size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { leftItems } = props;

  return (
    <Menu
      borderless
      fixed="top"
      style={{ borderRadius: "0px", backgroundColor: "#305E74" }}
    >
      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

      <Menu.Menu position="right">
        <Menu.Item
          className="navButton"
          style={{
            color: "#DBC8B6",
            paddingTop: "8px",
            paddingRight: "0",
            opacity: "100",
          }}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/madelinea/"
        >
          <Icon class="link" enabled name="linkedin" size="large" />
        </Menu.Item>
        <Menu.Item
          className="navButton"
          style={{ color: "#DBC8B6", paddingTop: "8px", opacity: "100" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/madelines-code"
        >
          <Icon class="link" enabled name="github" size="large" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const NavBarChildren = (props) => (
  <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

export default class Navbar extends Component {
  state = {
    visible: false,
  };

  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Media at="mobile">
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop leftItems={leftItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
      </div>
    );
  }
}
{/* <div class="ui one column grid">
  <div class="column">
    <div class="ui checkbox">
      <input type="checkbox" class="hidden" readonly="" tabindex="0" />
      <label>
        <code>visible</code>
      </label>
    </div>
  </div>
  <div class="column">
    <div class="ui raised segments pushable">
      <div class="ui inverted vertical labeled icon ui overlay left thin sidebar menu">
        <a class="item">Home</a>
        <a class="item">Games</a>
        <a class="item">Channels</a>
      </div>
      <div class="ui secondary segment">
        <h3 class="ui header">Clickable area</h3>
        <p>When you will click there, the sidebar will be closed.</p>
      </div>
      <div class="ui segment">
        <h3 class="ui header">Application Content</h3>
        <img
          src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
          class="ui image"
        />
      </div>
    </div>
  </div>
</div>; */}
