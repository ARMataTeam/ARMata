// @flow
import React, { Component } from 'react';
import { Button, Form, Header, Icon, Grid, Modal, Divider } from 'semantic-ui-react';

import styles from './QuickTemplate.css';

const fs = require('fs');

export default class QuickTemplate extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    openTemplate: (deployPath: string) => void,
    isQuickTemplateOpen: boolean,
    changePage: (action: string) => void,
    currentPage: number
  }

  openTemplate(deployPath: string) {
    this.props.openTemplate(deployPath);
    this.props.dispatchButtonClick('CLOSE_QUICKTEMPLATE');
  }

  generateGrid() {
    const templates = JSON.parse(fs.readFileSync(`./app/template/output_${this.props.currentPage}.json`, 'utf8'));

    const grid = [];
    for (let i = 0; i < 10; i += 2) {
      grid.push(<Grid.Row columns={2} key={i}>
        <Grid.Column>
          <Form.Field><Button className="ui button" type="button" fluid onClick={() => this.openTemplate(templates[i].deployPath)}>{templates[i].itemDisplayName}</Button></Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field><Button className="ui button" type="button" fluid onClick={() => this.openTemplate(templates[i].deployPath)}>{templates[i + 1].itemDisplayName}</Button></Form.Field>
        </Grid.Column>
      </Grid.Row>);
    }

    return grid;
  }

  render() {
    return (
      <Modal open={this.props.isQuickTemplateOpen} onClose={() => this.props.dispatchButtonClick('CLOSE_QUICKTEMPLATE')} closeIcon="close">
        <Modal.Content className={styles.quicktemplate}>
          <Header as="h2" icon textAlign="center">
            <Icon name="key" />
            Sample templates
            <Header.Subheader>
            Select quick template to load.
            </Header.Subheader>
          </Header>
          <Divider />
          <br />
          <Grid>
            {this.generateGrid()}
          </Grid>
          <br />
          <Button color="teal" className={styles.buttonLeft} onClick={() => this.props.changePage('DECREMENT')}><Icon name="arrow left" /></Button>
          <Button color="teal" className={styles.buttonRight} onClick={() => this.props.changePage('INCREMENT')}><Icon name="arrow right" /></Button>
          <br />
        </Modal.Content>
      </Modal>);
  }
}
