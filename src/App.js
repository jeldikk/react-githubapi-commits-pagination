import React from 'react'

import { Container } from 'react-bootstrap'
import ReactPaginate from "react-paginate"

import Header from './components/header/header.component'
import Footer from "./components/footer/footer.component"
import InputForm from "./components/input-form/input-form.component"
import CommitHistory from "./components/commit-history/commit-history.component"
import Pagination from "./components/pagination/pagination.component"
// import axios from 'axios';



import { fetchData } from "./axios/axios.util"

class App extends React.Component {

  state = {
    isLoading: false,
    owner: '',
    repo: '',
    data: [],
    per_page: 10,
    page_num: 1,
    totalItemsCount: null
  }

  componentDidMount() {

    // fetchData('django','django',10,1)
    //   .then((response) => this.setState({data: response.data}))

  }

  updateCommitData = (infoObject) => {

    this.setState({ isLoading: true })
    console.log({ infoObject })
    const { owner, repo, per_page, page_num } = infoObject;
    console.log("Execution came here")
    fetchData(owner, repo, per_page, page_num)
      .then((response => {
        if (response.status === 200) {

          this.setState({
            data: response.data
          })
        }
      }))
  }

  updateInputDetails = ({ owner, repo }) => {

    console.log({ owner, repo })
    this.setState((prevState, prevProps) => {
      return {
        ...prevState,
        owner,
        repo
      }
    }, () => this.updateCommitData(this.state))

  }

  onPageChange = (pagenumber) => {
    console.log("The page number is ", pagenumber)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Container>
          <InputForm updateInputDetails={this.updateInputDetails} />
          <CommitHistory commitList={this.state.data} />
          <Pagination pageCount={2} pageRangeDisplayed={5} marginPagesDisplayed={5} onPageChange={this.onPageChange}/>
        </Container>
        <Footer />
      </div>
    );
  }

}

export default App;
