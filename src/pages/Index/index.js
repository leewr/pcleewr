import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from './load-data'
// import './Home/Home.scss'

class Home extends React.Component {
  componentDidMount() {
    if (this.props.indexList.length <= 0) {
      console.log('fetchData')
      this.props.fetchData()
    }
  }
  render() {
    const { indexList } = this.props
    console.log('indexList', indexList)
    return (
      <div>
        <h2>F1 2018 Season Calendar</h2>
        <ul>
          {indexList.list.map(({ id, title }) => (
            <li key={id} onClick={this.getShow}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getShow() {
    console.log('click')
  }
}
Home.serverFetch = fetchData // static declaration of data requirements

const mapStateToProps = state => ({
  indexList: state.data
})

const mapDispatchToProps = {
  fetchData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
