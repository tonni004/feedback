import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Container from './Container';
import Section from './Section/Section';
import Notification from './Notification';
import Statistics from './Statistics';

class App extends Component {
  static propTypes = {}

  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  }

  countFeedback = (e) => {
    const { name } = e.currentTarget;

    this.setState(() => ({
      [name]: this.state[name] + 1,
    }))
  }

  countTotalFeedback() {
    const totalValue = Object.values(this.state);
    return totalValue.reduce((acc, value) => acc + value);


  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = (good * 100) / total;
    return Math.round(positiveFeedback)

  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Container>
          <Section title="Pleace leave feedback">
            <FeedbackOptions
              options={options}
              countFeedback={this.countFeedback}
            />
          </Section>

          <Section title="Statistics">
            {totalFeedback === 0
              ? <Notification message="There is no feedback" />
              : <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positiveFeedback={positiveFeedback} />}
          </Section>

        </Container>

      </>
    )
  }
};

export default App;
