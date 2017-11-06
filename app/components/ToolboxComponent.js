// @flow
import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { DragSource } from 'react-dnd';
import ImageGenerator from '../resources/imageGenerator';
import styles from './ToolboxComponent.css'; // eslint-disable-line flowtype-errors/show-errors

const componentSource = {
  beginDrag(props) {
    return {
      name: props.name,
    }; 
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      props.addResource(props.resourceType);
    }
  },
};

class ToolboxComponent extends Component {
  props: {
    addResource: (resourceType: string) => void, // eslint-disable-line react/no-unused-prop-types
    resourceType: string
  }

  render() {
    return this.props.connectDragSource(<div><Icon circular className={styles.toolboxIcon} size='big'><Image src={ImageGenerator.findImage(this.props.resourceType)} size="mini" centered /></Icon></div>); // eslint-disable-line react/prop-types
  }
}

export default DragSource('Component', componentSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(ToolboxComponent);
