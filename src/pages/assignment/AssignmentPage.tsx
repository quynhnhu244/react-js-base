import React, { useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/appstate';
import * as topicAction from '../../redux/actions/topic';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainWidget, FixedContainer } from '../../components/Widgets';
import { getIdByPathName } from '../../utils';
import '../../resources/scss/about.scss';
import '../../resources/scss/main.scss';

const AssignmentPage: FunctionComponent<{
  fetchTopicByTopicId: Function;
  match: any;
}> = ({ fetchTopicByTopicId, match }) => {
  useEffect(() => {
    const pathname = match.params.pathname;
    if (match.params.pathname) {
      const topicId = getIdByPathName(pathname);
      fetchTopicByTopicId(topicId);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <MainWidget className={'about-page'}>
      <Header />
      <FixedContainer>
        <h1>That is assigment page</h1>
      </FixedContainer>
      <Footer />
    </MainWidget>
  );
};

const mapStateToProps = (state: AppState, ownProps: any) => {
  return {
    assignmentState: state.assignmentState,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchTopicByTopicId: (topicId: number) =>
    dispatch(topicAction.fetchTopicByTopicId(topicId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentPage);
