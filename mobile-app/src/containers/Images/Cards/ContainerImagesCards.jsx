import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Segment } from 'semantic-ui-react';

import ImageCard from '../../../components/Image/Card/ImageCard.jsx';

import { setImagesOrder } from '../../../actions/images.js';

import './ContainerImagesCards.pcss';

import reorder from '../../../utils/reorder';

import propTypesImageCard from '../../../constants/propTypesImageCard.js';

class ContainerImagesCards extends React.Component {
    static propTypes = {
        cardsList: PropTypes.arrayOf(propTypesImageCard).isRequired,
        setImagesOrder: PropTypes.func.isRequired
    };

    onDragEnd = (result) => {
        console.log(result);
        if (!result.destination) return;

        const reorderedCardsList = reorder(
            this.props.cardsList,
            result.source.index,
            result.destination.index
        );

        this.props.setImagesOrder(reorderedCardsList);
    };

    render() {
        return (
            <Segment>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="cards-list">
                        {(provided, snapshot) => (
                            <div ref={ provided.innerRef }>
                                {this.props.cardsList.map((card, index) => (
                                    <Draggable key={`card-${index}`} draggableId={`item-${index}`} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <ImageCard
                                                    src={ card.src }
                                                    title={ card.title }
                                                    desc={ card.desc }
                                                    duration={ card.duration }
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Segment>
        );
    }
}

const mapStateToProps = ({
    images: { fromServer }
}) => ({ cardsList: fromServer })

export default connect(
    mapStateToProps,
    {
        setImagesOrder
    }
)(ContainerImagesCards);
