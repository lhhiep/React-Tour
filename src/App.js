import React from "react";
import { Navigation } from "@instructure/ui-navigation";
import { Avatar } from "@instructure/ui-avatar";
import {
  IconDashboardLine,
  IconAdminLine,
  IconCoursesLine,
  IconCalendarMonthLine,
  IconQuestionLine,
  IconCommonsLine,
} from "@instructure/ui-icons";
import { ScreenReaderContent } from "@instructure/ui-a11y-content";
import { Img } from "@instructure/ui-img";
import "@instructure/canvas-theme";
import "./App.css";
import logo from "./logo.svg";
import { View } from "@instructure/ui-view";
import { DrawerLayout } from "@instructure/ui-drawer-layout";
import { CloseButton } from "@instructure/ui-buttons";
import { Text } from "@instructure/ui-text";
import Tour from 'reactour'
import Step from './components/Step'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTourOpen: true,
      isShowingMore: false
    }
  }

  state = {
    endOpen: false,
    startOpen: false,
  };

  render() {
    return (

      
      <div style={{ height: "100vh" }}>
        <DrawerLayout>
          <DrawerLayout.Tray
            open={this.state.endOpen}
            placement="start"
            label="Drawer Tray End Example"
            left="check-margin"
            onDismiss={() => {
              this.setState({ endOpen: false });
            }}
          >
            <View
              as="div"
              maxWidth="500px"
              textAlign="center"
              margin="large auto"
              padding="large"
            >
              <CloseButton
                placement="end"
                offset="small"
                onClick={() => {
                  this.setState({ endOpen: false });
                }}
                screenReaderLabel="Close"
              />
              <Text as="div" size="x-small">
                Hello from end tray with a good amount of content as well
              </Text>
            </View>
          </DrawerLayout.Tray>
          <Navigation className="myNavigation"
            label="Main navigation"
            toggleLabel={{
              expandedLabel: "Minimize Navigation",
              minimizedLabel: "Expand Navigation",
            }}
          >
            <Navigation.Item node="Logo"
              icon={<Img src={logo} constrain="cover" />}
              label={<ScreenReaderContent>Home</ScreenReaderContent>}
              href="#"
              
            />
            <Navigation.Item node="Account"
              icon={<Avatar name="Ziggy Marley" size="x-small" />}
              label="Account"
              onClick={() => {
                this.setState({ endOpen: !this.state.endOpen });
              }}
            />
            <Navigation.Item node="Admin" icon={<IconAdminLine />} label="Admin" href="#" />
            <Navigation.Item node = "Dashboard"
              icon={<IconDashboardLine />}
              label="Dashboard"
              href="#"
            />
            <Navigation.Item node="Courses"
              icon={<IconCoursesLine />}
              label="Courses"
              href="#"
              
              
            />
            <Navigation.Item node="Calendar"
              icon={<IconCalendarMonthLine />}
              label="Calendar"
              href="#"
            />
            <Navigation.Item node="Commons"
              icon={<IconCommonsLine />}
              label="Commons"
              href="#"
            />
            <Navigation.Item node="Help"
              icon={<IconQuestionLine />}
              label="Help"
              href="#"
            />
          </Navigation>,
        </DrawerLayout>
        <Step />


      </div>



    );
  }
}

export default App;