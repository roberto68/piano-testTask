import { connect } from 'react-redux';
import {Chart} from 'rumble-charts';

function data (todos){
  let done = [];
  let undone = [];
  t=todos.length;
   for (i=0;i<t;i++ ) {
      if (t.isDone) {
        done.push(t,1)
      }else {
        undone.push(t,1);
      }
    }
  result = {done, undone};
  return result ;
}

export function chart(props) {
  const {todos} = props;
  render(
    <Chart
      width={300} height={100} series={todos} minY={0}
      scaleX={{paddingStart: 0, paddingEnd: 0}}
      scaleY={{paddingTop: 10}}>
      <Transform method='stack'>
        <Lines asAreas={true} />
      </Transform>
    </Chart>
  )
}

function mapStateToProps(state) {
  return {
    todos: data(state.todos)
  }
}
export default connect(mapStateToProps)(Chart);
