import React from 'react'

import { Container } from 'react-bootstrap'

import Header from './components/header/header.component'
import Footer from "./components/footer/footer.component"
import InputForm from "./components/input-form/input-form.component"
import CommitHistory from "./components/commit-history/commit-history.component"
import Pagination from "./components/pagination/pagination.component"
// import axios from 'axios';

import { fetchData, getTotalCommitCount } from "./axios/axios.util"

class App extends React.Component {

  state = {
    isLoading: false,
    owner: '',
    repo: '',
    data: [],
    per_page: 10,
    page_num: 1,
    errorMessage: null,
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
        
        if (response.status === 200 || response.status === 304) {

          // console.log('after condition of updateCommitData')
          
          if(this.state.data.length === 0){
            let totalCount = getTotalCommitCount(response.headers.link);
            // console.log("here is the total count", totalCount)
            this.setState({
              data: response.data,
              errorMessage: null,
              isLoading: false,
              totalItemsCount: totalCount
            })
          }
          else{
            this.setState({
              data: response.data,
              errorMessage: null,
              isLoading: false,
            })
          }
          
        }


      }))
      .catch((err) => {
        this.setState({
          errorMessage: err.message,
          isLoading: false,
          data: []
        })
      })
  }

  updateInputDetails = ({ owner, repo }) => {

    console.log({ owner, repo })
    this.setState((prevState, prevProps) => {
      return {
        ...prevState,
        owner,
        repo,
        data: []
      }
    }, () => this.updateCommitData(this.state))

  }

  onPageChange = (pagenumber) => {
    console.log("The page number is ", pagenumber)

    this.setState((prevState, prevProps)=>{
      return {
        ...prevState,
        page_num: pagenumber.selected+1
      }
    },() => this.updateCommitData(this.state))
  }

  render() {

    const {totalItemsCount, per_page} = this.state;
    return (
      <div className="app">
        <Header />
        <Container>
          <InputForm updateInputDetails={this.updateInputDetails} />
          <CommitHistory commitList={this.state.data} errorMessage={this.state.errorMessage} />
          {
            totalItemsCount
            ?
            <Pagination pageCount={this.state.totalItemsCount/this.state.per_page} pageRangeDisplayed={3} marginPagesDisplayed={3} onPageChange={this.onPageChange}/>
            : null
          }
          
        </Container>
        <Footer />
      </div>
    );
  }

}

export default App;
