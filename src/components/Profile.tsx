import * as React from 'react';

type Props = {
  name: string;
  job: string;
}

export default class Profile extends React.Component<Props> {
  render() {
    const { name, job } = this.props;
    return (
      <div>
        <h1>프로필</h1>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>직업: </b>
          {job}
        </div>
      </div>
    )
  }
}
