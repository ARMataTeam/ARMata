// @flow
import React, { Component } from 'react';
import { Button, Form, Header, Icon, Grid, Modal } from 'semantic-ui-react';

import styles from './QuickTemplate.css';

const fs = require('fs');

export default class QuickTemplate extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    openTemplate: (deployPath: string) => void,
    isQuickTemplateOpen: boolean
  }

  generateGrid() {
    const templates = JSON.parse(fs.readFileSync('./app/template/output.json', 'utf8'));

    const grid = [];
    for (let i = 0; i <= templates.length - 1; i += 2) {
      grid.push(<Grid.Row columns={2} key={i}>
        <Grid.Column>
          <Form.Field><Button className="ui button" type="button" fluid onClick={() => this.props.openTemplate(templates[i].deployPath)}>{templates[i].itemDisplayName}</Button></Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field><Button className="ui button" type="button" fluid onClick={() => this.props.openTemplate(templates[i].deployPath)}>{templates[i + 1].itemDisplayName}</Button></Form.Field>
        </Grid.Column>
      </Grid.Row>);
    }

    return grid;
  }

  render() {
    return (
      <Modal open={this.props.isQuickTemplateOpen} className={styles.quicktemplate} onClose={() => this.props.dispatchButtonClick('CLOSE_QUICKTEMPLATE')} closeIcon="close">
        <Modal.Content>
          <Header as="h3" icon style={{ color: '#FFF' }}>
            <Icon name="sitemap" />
            Toolbox
            <Header.Subheader style={{ color: '#FFF' }}>
            Select template
            </Header.Subheader>
          </Header>
          <br />
          <Grid>
            {this.generateGrid()}
          </Grid>
        </Modal.Content>
      </Modal>);
  }
}
