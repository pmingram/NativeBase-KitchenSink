
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class Block extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Title>Block</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Button block info style={styles.mb15}><Text>Info</Text></Button>
          <Button block danger style={styles.mb15}><Text>Danger</Text></Button>
          <Button block primary style={styles.mb15}><Text>Primary</Text></Button>
          <Button block warning style={styles.mb15}><Text>Warning</Text></Button>
          <Button block success style={styles.mb15}><Text>Success</Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Block);
