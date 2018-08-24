import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default class SingleColumnList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ items: newProps.items })
  }

  onDragEnd = result => {
    const { onDragEnd } = this.props
    if (!result.destination) {
      return
    }

    const items = reorder(
      /* eslint-disable-next-line */
      this.state.items,
      result.source.index,
      result.destination.index
    )

    if (onDragEnd) {
      onDragEnd(items, result.destination.index)
    } else {
      this.setState({ items })
    }
  }

  padding = n => n < 10 ? `0${n}` : n.toString()

  render() {
    const { listClassName, component, ...rest } = this.props
    const { type, propMapping } = component
    const { items } = this.state

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {p1 => (
            <div ref={p1.innerRef} className={listClassName}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {p2 => React.createElement(type, {
                    [propMapping.ref]: p2.innerRef,
                    [propMapping.item]: item,
                    order: this.padding(items.indexOf(item) + 1),
                    style: p2.draggableProps.style,
                    ...p2.draggableProps,
                    ...p2.dragHandleProps,
                    ...rest
                  })}
                </Draggable>
              ))}
              {p1.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
