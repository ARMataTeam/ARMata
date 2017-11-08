// @flow
import React, { Component } from 'react';
import { Sidebar, Button, Form, Header, Icon, Grid } from 'semantic-ui-react';

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
          <Form.Field><Button className="ui inverted button" type="button" fluid onClick={() => this.props.openTemplate(templates[i].deployPath)}>{templates[i].itemDisplayName}</Button></Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Form.Field><Button className="ui inverted button" type="button" fluid onClick={() => this.props.openTemplate(templates[i].deployPath)}>{templates[i + 1].itemDisplayName}</Button></Form.Field>
        </Grid.Column>
      </Grid.Row>);
    }

    return grid;
  }

  render() {
    return (<Sidebar as={Form} className={styles.quicktemplate} animation="overlay" width="wide" visible={this.props.isQuickTemplateOpen} icon="labeled" inverted>
      <Header as="h3" icon style={{ color: '#FFF' }}>
        <Icon name="sitemap" />
        Toolbox
<Header.Subheader style={{ color: '#FFF' }}>
          Select template
</Header.Subheader>
      </Header>
      <Form.Field><Button type="button" fluid onClick={() => this.props.dispatchButtonClick('CLOSE_QUICKTEMPLATE')}>Close</Button></Form.Field>
      <br />
      <Grid>
        {this.generateGrid()}
      </Grid>
    </Sidebar>);
  }
}
