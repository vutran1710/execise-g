import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, sourceId, endIndex, destId) => {
  const recal = (idx, id) => {
    if (id === 'droppable1') return idx * 2
    if (id === 'droppable2') return idx * 2 + 1
  }
  const result = Array.from(list)
  const [removed] = result.splice(recal(startIndex, sourceId), 1)
  result.splice(recal(endIndex, destId), 0, removed)

  return result
}

export default class MultiColumnList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  onDragEnd = result => {
    if (!result.destination) {
      return
    }

    const items = reorder(
      /* eslint-disable-next-line */
      this.state.items,
      result.source.index,
      result.source.droppableId,
      result.destination.index,
      result.destination.droppableId
    )

    this.setState({ items })
  }

  padding = n => n < 10 ? `0${n}` : n.toString()

  render() {
    const { listClassName, containerClassName, component } = this.props
    const { type, propMapping } = component
    const { items } = this.state
    const evenItems = items.filter((item, idx) => idx % 2 === 0)
    const oddItems = items.filter((item, idx) => idx % 2 !== 0)

    return (
      <DragDropContext onDragEnd={this.onDragEnd} className={containerClassName}>
        <Droppable droppableId="droppable1" className={listClassName}>
          {p1 => (
            <div ref={p1.innerRef} className={listClassName}>
              {evenItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {p2 => React.createElement(type, {
                    [propMapping.ref]: p2.innerRef,
                    [propMapping.item]: item,
                    order: this.padding(items.indexOf(item) + 1),
                    style: p2.draggableProps.style,
                    ...p2.draggableProps,
                    ...p2.dragHandleProps
                  })}
                </Draggable>
              ))}
              {p1.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2" className={listClassName}>
          {p1 => (
            <div ref={p1.innerRef} className={listClassName}>
              {oddItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {p2 => React.createElement(type, {
                    [propMapping.ref]: p2.innerRef,
                    [propMapping.item]: item,
                    order: this.padding(items.indexOf(item) + 1),
                    style: p2.draggableProps.style,
                    ...p2.draggableProps,
                    ...p2.dragHandleProps
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
