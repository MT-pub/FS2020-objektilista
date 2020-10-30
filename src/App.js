import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Grid } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'


function App() {
  const [leftList, setLeftList] = useState([
    { firstName: "Matti", lastName: "Virtanen", age: "30" },
    { firstName: "Teppo", lastName: "Virtanen", age: "31" },
    { firstName: "Seppo", lastName: "Virtanen", age: "32" }])
  const [rightList, setRightList] = useState([
    { firstName: "Hupu", lastName: "Ankka", age: "33" },
    { firstName: "Tupu", lastName: "Ankka", age: "34" },
    { firstName: "Lupu", lastName: "Ankka", age: "35" }])
  const [leftSelect, setLeftSelect] = useState(-1)
  const [rightSelect, setRightSelect] = useState(-1)


  const moveRight = () => {
    if (leftSelect !== -1) {
      setRightList(rightList.concat(leftList[leftSelect]))
      let tempArr = leftList
      tempArr.splice(leftSelect, 1)
      setLeftList(tempArr)
      setLeftSelect(-1)
    }
  }

  const moveLeft = () => {
    if (rightSelect !== -1) {
      setLeftList(leftList.concat(rightList[rightSelect]))
      let tempArr = rightList
      tempArr.splice(rightSelect, 1)
      setRightList(tempArr)
      setRightSelect(-1)
    }
  }

  const makeList = (list, select, setSelect, key) => {
    if (list.length !== 0) {
      return (
        <>
          {list.map((item, index) => {
            return (
              <ListItem
                button
                selected={select === index}
                onClick={() => { setSelect(index) }}
              >
                <ListItemText primary={item[key]} />
              </ListItem>)
          })
          }
        </>
      )
    } else if (key === "firstName") {
      return (<Grid item xs={5}>This list has no items.</Grid>)
    }
  }

  const sortList = (list, setList, key, direction = "ascend") => {
    var tempArr = list

    if (key === "age") {
      tempArr.sort((a, b) => parseFloat(a.age) - parseFloat(b.age))
    } else {
      tempArr.sort((a, b) => a[key].localeCompare(b[key]))
    }

    if (direction === "descend") {
      tempArr.reverse()
      setList(tempArr)
    } else {
      setList(tempArr)
    }

    return
  }

  return (
    <div className="App">
      <Grid container>
        <Grid container item direction="column" key="leftFirst" xs={2} md={1}>
          <Paper>
            <Grid container direction="row">
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(leftList, setLeftList, "firstName")}>arrow_drop_up</i></Grid>
              </Paper>
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(leftList, setLeftList, "firstName", "descend")}>arrow_drop_down</i></Grid>
              </Paper>
            </Grid>
            <List component="nav" key="leftList">
              {makeList(leftList, leftSelect, setLeftSelect, "firstName")}
            </List>
          </Paper>
        </Grid>
        <Grid container item direction="column" key="leftLast" xs={2} md={1}>
          <Paper>
            <Grid container direction="row">
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(leftList, setLeftList, "lastName")}>arrow_drop_up</i></Grid>
              </Paper>
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(leftList, setLeftList, "lastName", "descend")}>arrow_drop_down</i></Grid>
              </Paper>
            </Grid>
            <List component="nav" key="leftList">
              {makeList(leftList, leftSelect, setLeftSelect, "lastName")}
            </List>
          </Paper>
        </Grid>
        <Grid container item direction="column" key="leftAge" xs={1} md={1}>
          <Paper>
            <Grid container direction="row">
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(leftList, setLeftList, "age")}>arrow_drop_up</i></Grid>
              </Paper>
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(leftList, setLeftList, "age", "descend")}>arrow_drop_down</i></Grid>
              </Paper>
            </Grid>
            <List component="nav" key="leftList">
              {makeList(leftList, leftSelect, setLeftSelect, "age")}
            </List>
          </Paper>
        </Grid>
        <Grid container item direction="column" xs={2} md={1}>
          <Grid item></Grid>
          <Grid item xs={1}><i className="material-icons" onClick={moveRight}>arrow_forward</i></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}><i className="material-icons" onClick={moveLeft}>arrow_back</i></Grid>
        </Grid>
        <Grid container item direction="column" key="rightFirst" xs={2} md={1}>
          <Paper>
            <Grid container direction="row">
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(rightList, setRightList, "firstName")}>arrow_drop_up</i></Grid>
              </Paper>
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(rightList, setRightList, "firstName", "descend")}>arrow_drop_down</i></Grid>
              </Paper>
            </Grid>
            <List component="nav" key="rightList">
              {makeList(rightList, rightSelect, setRightSelect, "firstName")}
            </List>
          </Paper>
        </Grid>
        <Grid container item direction="column" key="rightLast" xs={2} md={1}>
          <Paper>
            <Grid container direction="row">
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(rightList, setRightList, "lastName")}>arrow_drop_up</i></Grid>
              </Paper>
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(rightList, setRightList, "lastName", "descend")}>arrow_drop_down</i></Grid>
              </Paper>
            </Grid>
            <List component="nav" key="rightList">
              {makeList(rightList, rightSelect, setRightSelect, "lastName")}
            </List>
          </Paper>
        </Grid>
        <Grid container item direction="column" key="rightAge" xs={1} md={1}>
          <Paper>
            <Grid container direction="row">
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(rightList, setRightList, "age")}>arrow_drop_up</i></Grid>
              </Paper>
              <Paper>
                <Grid item xs={1}><i className="material-icons" onClick={() => sortList(rightList, setRightList, "age", "descend")}>arrow_drop_down</i></Grid>
              </Paper>
            </Grid>
            <List component="nav" key="rightList">
              {makeList(rightList, rightSelect, setRightSelect, "age")}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;